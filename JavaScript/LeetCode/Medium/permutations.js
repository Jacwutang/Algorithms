var permute = function(nums) {
  if (nums.length <= 1) {
    return [nums];
  }

  let first = nums.shift();

  let perms = permute(nums);

  let total = [];

  for (let perm of perms) {
    console.log(perm);
    for (let i = 0; i <= perm.length; i++) {
      total.push(
        perm
          .slice(0, i)
          .concat(first)
          .concat(perm.slice(i))
      );
    }
  }

  return total;
};

console.log(permute([1, 2]) === [[1, 2], [2, 1]]);
