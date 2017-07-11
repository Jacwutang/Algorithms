
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var change = parseInt(line)
    var result = coinChange(change,0)
    console.log(result)
    rl.close();

})


function coinChange(change,numCoins){
  if(change === 0)
    return numCoins

  var coinsArray = [1,5,10]
  var temp = []

  for(var i = 0; i < coinsArray.length;i++){
    if(change - coinsArray[i] >= 0)
      temp.push(change - coinsArray[i])
  }

  var newChange = Math.min(...temp)



  return coinChange(newChange,numCoins + 1)






}
