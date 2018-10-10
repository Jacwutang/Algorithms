// Given a string, sort it in decreasing order based on the frequency of characters.
//
// Example 1:
//
// Input:
// "tree"
//
// Output:
// "eert"
//
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

var frequencySort = function(s) {
  let hash = {};
  let ans = "";

  for (let char of s) {
    if (hash[char] == undefined) {
      hash[char] = 1;
    } else {
      hash[char] += 1;
    }
  }

  let subs = Object.entries(hash).sort((a, b) => b[1] - a[1]);

  for (let sub of subs) {
    let temp = "";
    for (let i = 0; i < sub[1]; i++) {
      temp += sub[0];
    }
    ans += temp;
    temp = "";
  }
  return ans;
};
