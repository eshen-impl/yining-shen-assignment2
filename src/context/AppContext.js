import React, { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const initialState = {
    board: [],
    aliveColor: "#112a46",
    deadColor: "#F6F5F5",
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "CHG_SIZE",
      payload: {
        height: 20,
        width: 20,
      },
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        board: state.board,
        height: state.height,
        width: state.width,
        alive: state.alive,
        aliveColor: state.aliveColor,
        deadColor: state.deadColor,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
