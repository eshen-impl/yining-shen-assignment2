export const AppReducer = (state, action) => {
  const newBoard = [];
  let alive;
  switch (action.type) {
    case "CHG_SIZE":
      alive = initGrid(
        newBoard,
        action.payload.height,
        action.payload.width,
        0.05
      );
      console.log(newBoard);

      return {
        ...state,
        height: action.payload.height,
        width: action.payload.width,
        alive: alive,
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

    case "RESTART":
      alive = initGrid(newBoard, state.height, state.width, 0.05);
      console.log(newBoard);

      return {
        ...state,
        alive: alive,
        board: newBoard,
      };

    default:
      return state;
  }
};

const initGrid = (grid, height, width, density) => {
  for (let i = 0; i < height; i++) {
    grid.push([]);
    for (let j = 0; j < width; j++) {
      grid[i].push(10);
    }
  }
  const aliveSet = new Set();
  const count = Math.max(3, Math.round(height * width * density));
  for (let i = 0; i < count; i++) {
    const randomRow = Math.floor(Math.random() * height);
    const randomCol = Math.floor(Math.random() * width);
    aliveSet.add("" + randomRow + randomCol);
    grid[randomRow][randomCol] = 0;
  }
  return aliveSet.size;
};
