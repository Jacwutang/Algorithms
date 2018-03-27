// Implement a method to perform basic string compression using the counts of repeated characters.
// aabcccccaaa a2b1c5a3. If the compressed string is bigger then return the original string. Assume lower and upper case letters only


function compress(string){
  let result = "";
  let i = 0;
  let j = 1;
  while(i < string.length){

    while(string[i] === string[i+1]){
      j++;
      i++;
    }

    result = result + string[i] + j.toString();

    i++;
    j = 1;

  }
  return result;




}


let result = compress('aabcccccaaa');
console.log(result);
