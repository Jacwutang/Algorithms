var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var lineNumber = 1
var W = 0
var n = 0
var weights = []
rl.on('line', function (cmd) {
  if(lineNumber === 1){
    W = parseInt(cmd.split(' ')[0])
    n = parseInt(cmd.split(' ')[1])
  } else{
    weights = cmd.split(' ').map(Number)
  }

  lineNumber += 1
});

rl.on('close', function (cmd) {
  weights.unshift(0)
  var result = main(W,n)
  console.log(result)
  rl.close()


});

function main(W,n){
  var value = new Array(n+1)

  // create 2d Array fill with zeros
  for(var i = 0; i < n+1 ; i++){
    value[i] = new Array(W+1).fill(0)
  }


  for(var i = 1; i < n + 1; i++){

    for(var w = 1; w < W + 1; w++){
      //Optimal structure
      // 1. value(w-wi,i-1) + vi. Opitmal solution with ith item
      // 2. value(w,i-1). Optimal solution without ith item

      // assume optimal value is without ith item.
      value[i][w] = value[i-1][w]


      if(weights[i] <= w){
        var tempValue = value[i-1][w-weights[i]] + weights[i]

        if(tempValue > value[i][w]){
          value[i][w] = tempValue
        }
      }

    } // inner for loop

  } //outer for loop

  return value[n][W]
}
