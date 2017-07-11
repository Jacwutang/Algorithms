var obj = {}
var linel = 1
var segmentArr = []



var readline = require('readline');



var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (cmd) {

    if (linel === 1){
      n = parseInt(cmd)
      linel += 1
    }
    else{
      segmentArr.push([cmd.split(' ').map(Number)[0],cmd.split(' ').map(Number)[1]])

    }


});

rl.on('close', function (cmd) {


    var result = calcCollectSignature(segmentArr)
    result = [...new Set(result)]
    var size = result.length



    console.log(size)
    console.log(result.join(' '))
    rl.close()

});

function calcCollectSignature(segmentArr) {

  var commonElement = []


  segmentArr = segmentArr.sort(function(a,b){
    return a[1] - b[1]
  })

  var rightMinPoint = segmentArr[0][1]

  for(var x = 0; x < segmentArr.length; x++){

    if(rightMinPoint >= segmentArr[x][0] && segmentArr[x][1] >= rightMinPoint){
      commonElement.push(rightMinPoint)
    }
    else{
      rightMinPoint = segmentArr[x][1]
      commonElement.push(rightMinPoint)
    }

  }

    return commonElement

}
