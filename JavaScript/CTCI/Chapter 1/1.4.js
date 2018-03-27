//Write a method to replace all spaces in a string with %20. You may assume that the string has sufficient space at the end of the string
// to hold the addtl characters, and that you are given the true length of the string.
//example
// input "Mr John Smith    ", 13
// output "Mr%20John%20Smith"

function joinString(string, strlength){
  let result = "";

  for(let i = 0; i < strlength;i++){
    if(string[i] === ' '){
      result += ('%20');
    } else{
      result += (string[i]);
    }

  }

  return result;


}


let result = joinString("Mr John Smith   ", 13);
console.log(result);
