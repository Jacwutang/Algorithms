var input = []
var maxInputLine = []
var lineNum = 0

var readline = require('readline');



var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (cmd) {
    if (lineNum === 0){
      n = parseInt(cmd)
      lineNum += 1
    }
    else{
      input.push(cmd.split(' ').map(Number).sort(function(a,b){
        return b - a
      }))


    }
});

rl.on('close', function (cmd) {


    var sum = calculateMaxRevenue()
    console.log(sum)
    rl.close()

});

function calculateMaxRevenue(){
  //var enum = input.length - 1
  var sum = 0
  var tempSum = 1
  while(n > 0){

    for(var x = 0; x < input.length; x++){
      tempSum *= input[x].shift()

    }

    sum += tempSum
    tempSum = 1
    n -= 1
  }
  return sum

}
