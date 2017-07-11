var readline = require('readline');
var lineNum = 0
var input = []
var n = 0
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (cmd) {
  if (lineNum === 0){
     n = parseInt(cmd)
  }
  else{
    input = input.concat(cmd.split(' '))

  }

  lineNum += 1

});

rl.on('close', function (cmd) {

  var result = main()
  console.log(result)

  rl.close()


});

function main(){
  var answer = ""
  var index = 0

  while(input.length !== 0){
    maxDigit = Number.NEGATIVE_INFINITY

    for(var n = 0; n < input.length; n++){
      if( IsGreaterOrEqual(input[n],maxDigit) === true){
        maxDigit = input[n]
        index = n
      }

    }

    answer += maxDigit
    input.splice(index,1)
  }

  return answer
}
function IsGreaterOrEqual(digit,maxDigit){
  if(maxDigit === Number.NEGATIVE_INFINITY)
    return true

  var a = parseInt( digit.toString() + maxDigit.toString() )
  var b = parseInt ( maxDigit.toString() + digit.toString() )

  var max = Math.max(a,b)

  if(max === a)
    return true

  return false
}
