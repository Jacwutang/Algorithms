var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var s1 = ""
var s2 = ""
var lineNumber = 1

rl.on('line', function (cmd) {
  if(lineNumber === 1){
    s1 = cmd
  }
  else{
    s2 = cmd
  }

  lineNumber += 1

});
rl.on('close', function (cmd) {
  var result = main()
  console.log(result)
  rl.close()


});

function main(){
  var rows = Math.min(s1.length,s2.length)
  var cols = Math.max(s1.length,s2.length)

  //Longer length string on 'x' side. Smaller length on 'y' side
  if(s1.length > s2.length){
    var copy = s2
    s2 = s1
    s1 = copy
  }
  //console.log("s1 ",s1,"s2 ",s2)

  var alignment = new Array(rows)

  // create 2d Array of rows x cols
  for(var i = 0; i < rows + 1; i++){
    alignment[i] = new Array(cols+1).fill(0)
  }

  //fill 1st row and 1st cols
  for(var i = 0; i < rows + 1; i++){
    alignment[i][0] = i
  }

  for(var j = 0; j < cols + 1; j++){
    alignment[0][j] = j
  }


  for(var i = 1; i < rows + 1; i++){
    //console.log(s1[i])
    for(var j = 1; j < cols + 1; j++){
      var insertion = alignment[i][j-1] + 1
      var deletion = alignment[i-1][j] + 1
      var match = alignment[i-1][j-1]
      var mismatch = alignment[i-1][j-1] + 1

      if(s1[i-1] === s2[j-1]){
        alignment[i][j] = Math.min(insertion,deletion,match)
      } else{
        alignment[i][j] = Math.min(insertion,deletion,mismatch)
      }
    } // inner for loop

  } // outer for loop

  console.log(alignment)
  return alignment[rows][cols]

} // end main
