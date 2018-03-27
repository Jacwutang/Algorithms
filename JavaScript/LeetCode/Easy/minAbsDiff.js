// Consider an array of integers, . We define the absolute difference between two elements,  and  (where ), to be the absolute value of .
//
// Given an array of  integers, find and print the minimum absolute difference between any two elements in the array.
// input: 3
//       3 -7 0
//
//       output 3

      function minimumAbsoluteDifference(n, arr) {
          let min = Number.MAX_VALUE;

          let sorted = arr.sort((a,b) =>  a -b);
          // console.log(arr);

          for(let i = 0; i < arr.length - 1; i++){

                  let temp = Math.abs(arr[i] - arr[i+1]);
                  if(temp < min){
                      min = temp;
                  }

          }

          return min;
      }
