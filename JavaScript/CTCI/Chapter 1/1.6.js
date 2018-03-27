// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate
// the image by 90 degrees. Do it in place?

function rotateImage(matrix,length){

  for(let layer = 0; layer < length/2; layer++){


    let first = layer;
    let last = length - 1 - layer;

    for(let i = first ; i < last; i++){
      let temp = matrix[layer][i];

      // bottomLeft to topLeft
      matrix[layer][i] = matrix[last][first];

      //bottomRight to bottomLeft
      matrix[last][first] = matrix[last][last];

      //topRight to bottomRight
      matrix[last][last] = matrix[first][last];

      //move temp to topRight

      matrix[first][last] = temp;


    }

  }

  return matrix;

}


let result = rotateImage([ ['A','B'], ['C','D'] ], 2);
console.log(result);
