var readline = require('readline');

var input = []
var obj = {}

var lineNum = 0
var n = 0
var capacity = 0

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (cmd) {
    if (lineNum === 0){
      n = parseInt(cmd.split(' ')[0])
      capacity = parseInt(cmd.split(' ')[1])
      lineNum += 1
    }
    else{
      input.push(cmd.split(' ').map(Number))

      unitValueCalc(input[lineNum-1])

      lineNum += 1
    }
});

rl.on('close', function (cmd) {
    var result = knapsack()
    console.log(result)
    rl.close()

});

function unitValueCalc(input){
  var unitValue = input[0] / input[1]
  //console.log(unitValue)
  obj[unitValue] = input

}

function knapsack(){
    // sort $/unit in descending order.
    var keys = Object.keys(obj).map(Number).sort(function(a,b){
      return b-a
    })


    // keep stuffing knapsack until capacity === 0
    var currentCapacity = 0
    var maxValue = 0
    while ( (currentCapacity !== capacity) ){

      var keyID = keys.shift()

      if(obj[keyID][1] + currentCapacity <= capacity){
        maxValue += obj[keyID][0]
        currentCapacity += obj[keyID][1]
        if (keys.length === 0)
          return maxValue

      }
      else{
        var rem = ( (capacity-currentCapacity)/obj[keyID][1]) * obj[keyID][0]

        return (rem + maxValue).toFixed(4)
      }






    }



    return maxValue


}
