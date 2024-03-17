export const AppReducer = (state, action) => {
  let newBoard = [];
  let alive, count;
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
      alive = state.alive;
      newBoard = state.board.map((innerArray) => [...innerArray]);
      if (state.board[action.payload.i][action.payload.j] === 0) {
        newBoard[action.payload.i][action.payload.j] = 10;
        alive -= 1;
      } else {
        newBoard[action.payload.i][action.payload.j] = 0;
        alive += 1;
      }

      console.log(state.board);
      return {
        ...state,
        alive: alive,
        board: newBoard,
      };

    case "RESTART":
      alive = initGrid(newBoard, state.height, state.width, 0.05);
      console.log(newBoard);

      return {
        ...state,
        alive: alive,
        board: newBoard,
      };

    case "CHG_COLOR":
      if (action.payload.type === "alive") {
        return {
          ...state,
          aliveColor: action.payload.val,
        };
      } else {
        return {
          ...state,
          deadColor: action.payload.val,
        };
      }

    case "PROCEED":
      newBoard = state.board.map((innerArray) => [...innerArray]);
      alive = state.alive;
      for (let i = 0; i < state.height; i++) {
        for (let j = 0; j < state.width; j++) {
          count = aliveNeighborCount(
            state.board,
            i,
            j,
            state.height,
            state.width
          );
          if (state.board[i][j] === 0) {
            if (count < 2 || count > 3) {
              newBoard[i][j] += 1;
              alive -= 1;
            }
          } else {
            if (count === 3) {
              newBoard[i][j] = 0;
              alive += 1;
            } else {
              newBoard[i][j] += 1;
            }
          }
        }
      }
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

const neighbors = (() => {
  const res = [];
  const dir = [-1, 0, 1];
  for (let i of dir) {
    for (let j of dir) {
      if (i === 0 && j === 0) {
        continue;
      } else {
        res.push([i, j]);
      }
    }
  }
  return res;
})();

const aliveNeighborCount = (grid, row, col, height, width) => {
  let count = 0;
  let nRow, nCol;
  for (let [i, j] of neighbors) {
    nRow = row + i;
    nCol = col + j;
    if (nRow < 0 || nCol < 0 || nRow >= height || nCol >= width) {
      continue;
    } else {
      if (grid[nRow][nCol] === 0) {
        count += 1;
      }
    }
  }
  return count;
};
