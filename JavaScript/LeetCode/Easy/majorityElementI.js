var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0];

  let hash = {};
  let majority = Math.floor(nums.length / 2) + 1;

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (hash[el] === undefined) {
      hash[el] = 1;
    } else {
      hash[el] += 1;

      if (hash[el] === majority) {
        return el;
      }
    }
  }
};

console.log(majorityElement([3, 2, 3]) === 3);
