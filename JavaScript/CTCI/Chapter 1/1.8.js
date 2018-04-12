// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given 2 strings, s1 and s2, write code to check if s2 is a rotation of s1 using only 1 call
// to isSubstring
//
// ex waterbottle is a rotation of erbottlewat

function checkIsSubstring(s1,s2){
  let combinedString = s1 + s1;

  return combinedString.includes(s2);



}

let res = checkIsSubstring("waterbottle", "erbottlewat");
console.log(res);
