import React, { createContext, useEffect, useReducer } from "react";

export const AppReducer = (state, action) => {
  const newBoard = [];
  switch (action.type) {
    case "CHG_SIZE":
      for (let i = 0; i < action.payload.height; i++) {
        newBoard.push([]);
        for (let j = 0; j < action.payload.width; j++) {
          newBoard[i].push("");
        }
      }
      console.log(newBoard);

      return {
        ...state,
        height: action.payload.height,
        width: action.payload.width,
        board: newBoard,
      };

    case "REVERSE":
      state.board[action.payload.i][action.payload.j] = state.board[
        action.payload.i
      ][action.payload.j]
        ? 0
        : 10;

      console.log(state.board);
      return {
        ...state,
        board: state.board.map((innerArray) => [...innerArray]),
      };

    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const initialState = {
    board: [],
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
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
