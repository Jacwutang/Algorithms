
var n = 0
var input = []
var lineNum = 1

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
  var result = get_majority_element(input,0,input.length-1)
  if(result > 0){
    console.log(1)
  } else{
    console.log(0)
  }

  rl.close()
})

function get_majority_element(arr, left, right){

    if (left === right)
        return -1
    if (left + 1 === right)
        return arr[left]

    var mid = left + Math.floor( (right - left) / 2)

    var majorityLeft = get_majority_element(arr,left,mid)

    var majorityRight = get_majority_element(arr,mid,right)

    var resultMajority = isMajorityElement(arr.slice(left,right + 1), majorityLeft,majorityRight)
    if(resultMajority > 0){
      return resultMajority
    }


    return -1


}

function isMajorityElement(arr,left,right){
  var count = 0
  var countLeft = 0
  var countRight = 0
  for(var x = 0; x < arr.length; x++){
    if(arr[x] === left){
      countLeft += 1
    }
    else if(arr[x] === right){
      countRight += 1
    }
    if(countLeft > ( arr.length / 2) )
      return left
    if (countRight > (arr.length / 2))
      return right
  }
    return -1
}
