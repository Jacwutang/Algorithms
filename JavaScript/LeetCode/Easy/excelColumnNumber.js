// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...
// Example 1:
//
// Input: "A"
// Output: 1

var titleToNumber = function(s) {
  let result = 0;

  for (let c of s) {
    result = result * 26 + (c.charCodeAt(0) - "A".charCodeAt(0) + 1);
  }

  return result;
};

console.log(titleToNumber("AA") === 27);
