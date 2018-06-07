var longestIncreasingPath = function(matrix) {
  if (matrix.length === 0) return 0;

  let max = 0;
  let val;
  let x = matrix.length - 1;
  let y = matrix[0].length - 1;

  //init visited "cache" with 0s.
  let visited = new Array(matrix.length);

  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(matrix[0].length).fill(0);
  }

  //x -> 0
  // y -> 1

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      val = dfs(matrix, row, col, x, y, visited);

      max = val > max ? val : max;
    }
  }
  return max;
};

function dfs(matrix, row, col, x, y, visited) {
  let max;
  // out of bounds
  if (row < 0 || row > x || (col < 0 || col > y)) {
    return 0;
  } else if (visited[row][col] !== 0) {
    //if already visited.
    return visited[row][col];
  }

  let up, down, left, right;

  if (row - 1 >= 0 && matrix[row - 1][col] > matrix[row][col]) {
    up = dfs(matrix, row - 1, col, x, y, visited);
  } else {
    up = 0;
  }

  if (row + 1 <= x && matrix[row + 1][col] > matrix[row][col]) {
    down = dfs(matrix, row + 1, col, x, y, visited);
  } else {
    down = 0;
  }

  if (col - 1 >= 0 && matrix[row][col - 1] > matrix[row][col]) {
    left = dfs(matrix, row, col - 1, x, y, visited);
  } else {
    left = 0;
  }

  if (col + 1 <= y && matrix[row][col + 1] > matrix[row][col]) {
    right = dfs(matrix, row, col + 1, x, y, visited);
  } else {
    right = 0;
  }

  max = 1 + Math.max(up, down, left, right);

  visited[row][col] = max;

  return max;
}

let length = longestIncreasingPath([[3, 3, 14, 2, 17, 12, 5]]);
console.log(length === 3);
