var kthSmallest = function(matrix, k) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    result = result.concat(matrix[row]);
  }

  return result.sort((a, b) => a - b)[k - 1];
};
