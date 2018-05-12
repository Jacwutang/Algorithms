var longestSubstring = function foo(s, k) {
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]] += 1;
    }
  }

  let max = 0;

  for (let key in hash) {
    if (hash[key] < k) {
      let arr = s.split(key);
      for (let i = 0; i < arr.length; i++) {
        max = Math.max(foo(arr[i], k), max);
      }
      return max;
    }
  }

  return s.length;
};
