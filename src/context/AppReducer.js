export const AppReducer = (state, action) => {
  let newBoard = [];
  let alive, count;
  switch (action.type) {
    case "CHG_SIZE":
      alive = initGrid(newBoard, action.payload.height, action.payload.width);
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
      alive = initGrid(newBoard, state.height, state.width);
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

const initGrid = (grid, height, width, density = 0.1, clusterCount = 5) => {
  const aliveCount = Math.max(3, Math.round(height * width * density));
  const clusterSize = Math.round(aliveCount / clusterCount);

  const clusters = [];
  for (let i = 0; i < clusterCount; i++) {
    const centerX = Math.floor(Math.random() * width);
    const centerY = Math.floor(Math.random() * height);
    for (let j = 0; j < clusterSize; j++) {
      const offsetX = Math.floor(Math.random() * 9) - 4;
      const offsetY = Math.floor(Math.random() * 9) - 4;
      const x = Math.min(Math.max(0, centerX + offsetX), height - 1);
      const y = Math.min(Math.max(0, centerY + offsetY), width - 1);
      clusters.push([x, y]);
    }
  }

  const clusterSet = new Set(clusters.map(JSON.stringify));

  for (let i = 0; i < height; i++) {
    grid.push([]);
    for (let j = 0; j < width; j++) {
      if (clusterSet.has(JSON.stringify([i, j]))) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = 10;
      }
    }
  }

  return clusterSet.size;
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
