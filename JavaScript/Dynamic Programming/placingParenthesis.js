var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



var d = ""

rl.on('line', function (cmd) {
  d = cmd


});
rl.on('close', function (cmd) {

  var operations  = []
  var temp = []
  for(var i = 0; i < d.length;i++){
    if(isNaN(d[i]) === true){
      operations.push(d[i])
    } else{
      temp.push(d[i])
    }
  }

  d = temp.map(Number)

  d.unshift(null)
  operations.unshift(null)

  var answer = Parentheses(operations,d)
  console.log(answer)
  rl.close()


});

function Parentheses(operations,d){
  var M = createMatrix(d.length)
  var m = createMatrix(d.length)

  // diagonals implies only 1 number
  for(var i =1; i < d.length; i++){
    m[i][i] = d[i]
    M[i][i] = d[i]
  }

  for(var s = 1; s < d.length ; s++){

    for(var i = 1; i < d.length - s; i++){
      var j = s + i
      console.log("i ",i,"j ",j)
      var result = MinAndMax(i,j,m,M,operations)
      m[i][j] = result[0]
      M[i][j] = result[1]
    }
  }

  return M[1][d.length - 1]

}

function createMatrix(n){
  var arr = new Array(n)

  for(var i = 0; i < n; i++){
    arr[i] = new Array(n)
  }

  for(var j = 0; j < n; j++){
    arr[0][j] = 0
    arr[j][0] = 0
  }

  return arr
}

function MinAndMax(i,j,m,M,operations){

  var min = Number.POSITIVE_INFINITY
  var max = Number.NEGATIVE_INFINITY

  for(var k = i; k < j; k++){
    var a = evaluate(M[i][k],operations[k],M[k+1][j])
    var b = evaluate(M[i][k],operations[k],m[k+1][j])
    var c = evaluate(m[i][k],operations[k],m[k+1][j])
    var d = evaluate(m[i][k],operations[k],M[k+1][j])
    min   = Math.min(min,a,b,c,d)
    max   = Math.max(max,a,b,c,d)
  }

  return [min,max]
}

function evaluate(left,operator,right){
  if(operator === '+'){
    return left + right
  } else if(operator === '-'){
    return left - right
  } else{
    return left * right
  }
}
