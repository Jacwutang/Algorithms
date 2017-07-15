// Uses Djikstra's 3 way partioning




var n = 0
var input = []
var lineNum = 1
//var m = 0

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
  QuickSort(input,0,input.length - 1)
  console.log(input.join(" "))

  rl.close()
})


function QuickSort(arr,left,right){
  if(left >= right)
    return

  var m = Partition(arr,left,right)

  var m1 = m[0]
  var m2 = m[1]
  QuickSort(arr,left,m1-1)

  QuickSort(arr,m2+1,right)

}

function Partition(arr,left,right){
  var i = left
  var lt = left
  var gt = right
  var pivot = arr[left]

  while(i <= gt){
    if(arr[i] < pivot){
      var copy = arr[lt]
      arr[lt] = arr[i]
      arr[i] = copy

      i += 1
      lt += 1
    }

    else if(arr[i] === pivot){
      i += 1
    }
    else{
      var copy = arr[i]

      arr[i] = arr[gt]

      arr[gt] = copy

      gt -= 1
    }

  }

  return [lt,gt]
}
