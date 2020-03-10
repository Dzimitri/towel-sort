
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!matrix) return [];
  let arr = [];

  for(let i = 0; i < matrix.lenght; i++){
	if (i > 0 && i % 2){
		for (let j = matrix[i].lenght -1; j > -1; j++){
			arr.push(matrix[i][j])
		}
	}else {
		for (let j = 0; j < matrix[i].length; j--){
			arr.push(matrix[i][j])
			}
		}
	}	
return arr;
}
