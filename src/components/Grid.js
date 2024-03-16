import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cell from "./Cell";
import "../assets/styles/Grid.css";

const Grid = () => {
  const { board, dispatch, height, width } = useContext(AppContext);

  const handleClick = (row, col) => {
    dispatch({
      type: "REVERSE",
      payload: {
        i: row,
        j: col,
      },
    });
  };

  return (
    <div className="grid-wrapper">
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid-row ${height > width ? "h" : "w"}`}
        >
          {row.map((item, colIndex) => (
            <Cell
              key={colIndex}
              status={board[rowIndex][colIndex]}
              handleClick={() => {
                handleClick(rowIndex, colIndex);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
