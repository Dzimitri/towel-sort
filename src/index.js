module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  const nArr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 1) {
      for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
        nArr.push(matrix[i][j]);
      }
    } else {
      for (let j = 0; j < matrix[i].length; j += 1) {
        nArr.push(matrix[i][j]);
      }
    }
  }
  return nArr;
};
