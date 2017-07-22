var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (cmd) {
  var  n = parseInt(cmd)
  var result = main(n)
  console.log(result[0])
  console.log(result[1].join(' '))

});
rl.on('close', function (cmd) {

  rl.close()


});

function main(n){

  var arr = new Array(n+1).fill(0)
  arr[0] = 0
  arr[1] = 0

  // The minimum number of operations to reach n is a sub-problem that can be computed by the min number of operations to reach
  // [n-1],[n-2],[n-3], etc....
  
  for(var i = 2; i < arr.length;i++){
      var minValue = []
      minValue.push(arr[i-1] + 1)
      
      if(i % 3 === 0){
        minValue.push(arr[i/3] + 1)
      }

      else if(i % 2 ===0){
        minValue.push(arr[i/2] + 1)
      }

      var min = Math.min(...minValue)

      arr[i] = min
  }



  //backtrack function to find path taken.
  
  var answer = []
  answer.push(n)

  var j = n
  
  while(j > 1){
    var min = arr[j-1]

    if( j % 3 === 0 && arr[j/3] <= min){
      answer.unshift(j/3)
      j = j/3
    }
    else if( j % 2 === 0 && arr[j/2] <= min){
      answer.unshift(j/2)
      j = j/2
    }

    else{
      answer.unshift(j-1)
      j -= 1
    }


  }

  return [arr[n],answer]

}
