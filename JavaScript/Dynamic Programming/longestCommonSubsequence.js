var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var lineNumber = 1
var stringArr = []
rl.on('line', function (cmd) {

  if(lineNumber % 2 === 0){
    stringArr.push(cmd.split(' '))
  }

  lineNumber += 1

});
rl.on('close', function (cmd) {
  var s1 = stringArr[0].map(Number)
  var s2 = stringArr[1].map(Number)
  var s3 = stringArr[2].map(Number)


  var result = main(s1,s2,s3)

  console.log(result)
  rl.close()


});

function main(s1,s2,s3){

  var alignment = new Array(s1.length+1)

  for(var i = 0; i <= s1.length; i++){
    alignment[i] = new Array(s2.length + 1).fill(0)
    for(var j = 0; j <= s2.length; j++){
      alignment[i][j] = new Array(s3.length+1).fill(0)
    }
  }




  for(var i = 0; i <= s1.length; i++){

    for(var j = 0; j <= s2.length; j++){

      for(var k = 0; k <= s3.length; k++){
        // if either index is 0, then lcs is 0

        if(k === 0 || j === 0 || i === 0){
          alignment[i][j][k] = 0
        }
        //all 3 match
        else if(s1[i-1] === s2[j-1] && s1[i-1] === s3[k-1]){
          alignment[i][j][k] = alignment[i-1][j-1][k-1] + 1

        }
        //mismatch in at least 1 char
        else{
          alignment[i][j][k] = Math.max(alignment[i-1][j][k],alignment[i][j-1][k],alignment[i][j][k-1])

        }

      } // inner for loop

    } // middle for loop

  } // outer for loop


  return alignment[s1.length][s2.length][s3.length]

} // end main
