var s = 0
var p = 0
var num_segments = 1

var input = []
var points = []
var lineNum = 1



var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

rl.on('line',function(cmd){
  if(lineNum === 1){
    s = parseInt(cmd.split(' ')[0])
    p = parseInt(cmd.split(' ')[1])
  }
  else if(num_segments <= s){
    input.push([parseInt(cmd.split(' ')[0]), 'l'])
    input.push([parseInt(cmd.split(' ')[1]), 'r'])
    num_segments += 1
  }
  else{
    points = (cmd.split(' ').map(Number))
  }
  lineNum += 1


})


rl.on('close',function(cmd){

  var results = main()
  var finalAnswer = []

   for(var x = 0; x < points.length;x++){
     finalAnswer.push(results[points[x][0]])
   }

   console.log(finalAnswer.join(' '))

  rl.close()
})

function main(){

  var pointsLength = points.length
  var inputLength = input.length

  for(var x = 0; x < pointsLength;x++){
    var temp = points.shift()
    points.push([temp,'p'])
  }

  // Code Below causing extra time overhead
  // for(var y = 0; y < inputLength;y++){
  //   var temp2 = input.shift()
  //   input.push([temp2[0], 'l'])
  //   input.push([temp2[1],'r'])
  // }


  var newInput = input.concat(points)


  newInput = newInput.sort(function(a,b){

    //secondary sort if values are equal
    if(a[0] === b[0]){
      var x = a[1]
      var y = b[1]
       return x < y ? -1 : x > y ? 1 : 0;
    }

    return a[0] - b[0]
  })

  var lCount = 0
  var rCount = 0
  var answer = {}

  for(var x = 0; x < newInput.length; x++){
    if(newInput[x][1] === 'l'){
      lCount += 1
    }
    else if(newInput[x][1] === 'p'){
      answer[newInput[x][0]] = (lCount - rCount)
    }
    else{
      rCount += 1
    }

  } // for loop
  return answer
}
