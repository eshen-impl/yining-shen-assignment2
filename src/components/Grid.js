import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cell from "./Cell";
import "../assets/styles/Grid.css";

const gradientCalc = (aliveColor, deadColor, step) => {
  if (step > 10) {
    return deadColor;
  }
  const ratio = step / 10;
  const r = Math.round(
    parseInt(deadColor.slice(1, 3), 16) * ratio +
      parseInt(aliveColor.slice(1, 3), 16) * (1 - ratio)
  );
  const g = Math.round(
    parseInt(deadColor.slice(3, 5), 16) * ratio +
      parseInt(aliveColor.slice(3, 5), 16) * (1 - ratio)
  );
  const b = Math.round(
    parseInt(deadColor.slice(5, 7), 16) * ratio +
      parseInt(aliveColor.slice(5, 7), 16) * (1 - ratio)
  );
  return `rgb(${r}, ${g}, ${b})`;
};

const Grid = () => {
  const { board, dispatch, height, width, aliveColor, deadColor } =
    useContext(AppContext);

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
              bgColor={gradientCalc(
                aliveColor,
                deadColor,
                board[rowIndex][colIndex]
              )}
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
