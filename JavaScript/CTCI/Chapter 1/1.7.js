// Write an algorithm such if an element in an MXN matrix is 0, its entire row and column are set to 0.
//
//


function setZeroes(matrix){

  let rowBool = new Array(matrix.length);
  let colBool = new Array(matrix[0].length);

  for(let i = 0; i < matrix.length; i++){

    for(let j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] === 0){
          rowBool[i] = true;
          colBool[j] = true;

        }

      }
  }

  for(let i = 0; i < rowBool.length; i++){
    if(rowBool[i]) nullifyRow(matrix,i);
  }

  for(let j = 0; j < colBool.length; j++){
    if(colBool[j]) nullifyCol(matrix,j);
  }

  return matrix;


}

function nullifyRow(matrix,i){

  for(let j = 0; j < matrix.length; j++){
    matrix[i][j] = 0;
  }


}



function nullifyCol(matrix,j){
  for(let i = 0; i < matrix[0].length; i++){
    matrix[i][j] = 0;
  }
}


let res = setZeroes([ [1,2,3],[7,5,2],[7,0,9] ]);
console.log(res);
