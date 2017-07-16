var n = 0
var input = []
var lineNum = 1
var count = 0
var total = 0


var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

});

rl.on('line',function(cmd){
  if(lineNum === 1){
    n = parseInt(cmd)
  } else{
    input = cmd.split(' ').map(Number)
  }
  lineNum += 1


})


rl.on('close',function(cmd){
  var result = MergeSort(input)
  console.log(count)

  rl.close()
})

function MergeSort(arr){
  if(arr.length === 1)
    return arr

  var m = Math.floor(arr.length/2)

  //console.log(arr.slice(0,m),arr.slice(m))

  var leftHalf = MergeSort(arr.slice(0,m))


  var rightHalf = MergeSort(arr.slice(m))



  var mergeArr = Merge(leftHalf,rightHalf)

  //console.log(mergeArr)






  return mergeArr
}

function Merge(leftHalf,rightHalf){

  var d = []



  while(leftHalf.length !== 0 || rightHalf.length !== 0){
    var a = leftHalf[0]
    var b = rightHalf[0]

    if (a === undefined && b !== undefined){
      d = d.concat(rightHalf)

      return d

    } else if(a !== undefined && b === undefined){
      d = d.concat(leftHalf)
      return d
    }

    if(a <= b){
      d.push(a)
      leftHalf.shift()
    }

    // inversion found
    else if(a > b){
      d.push(b)
      // entire leftHalf is > rightHalf[0].
      count = count + leftHalf.length
      rightHalf.shift()

    }


  } // while
  return d
}
