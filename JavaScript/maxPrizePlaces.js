

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (cmd) {

    var n = parseInt(cmd)
    var result = main(n)

    var count = 0
    var resultArr = []
    for(var x in result){
      resultArr.push(result[x])
      count += 1
    }

    console.log(count)
    console.log(resultArr.join(' '))

    rl.close()



});

rl.on('close', function (cmd) {

  rl.close()

});

function main(n){
  if(n < 3)
    return [n]

  var solution = {}


  var iter = 1



  while(true){

    if(solution[n - iter] === undefined && n - iter !== iter && n !== iter){
      solution[iter] = iter


    }
    else if(solution[n-iter] !== undefined){
      solution[iter] = n
      return solution
    }
    else{
      solution[n] = n
      return solution
    }
    n -= iter
    iter += 1


  } // while

  return solution
} // main
