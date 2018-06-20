//Convert Roman Numeral to Integer

var romanToInt = function(s) {
  let sum = 0;
  let j;

  let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let numeral, numeral_ahead;

  for (let i = 0; i < s.length; i++) {
    j = i + 1;
    numeral = s[i];
    numeral_ahead = s[j];

    if (j < s.length && hash[numeral] < hash[numeral_ahead]) {
      sum = sum + (hash[numeral_ahead] - hash[numeral]);
      i += 1;
    } else {
      sum += hash[numeral];
    }
  }

  return sum;
};

console.log(romanToInt("III") === 3);
