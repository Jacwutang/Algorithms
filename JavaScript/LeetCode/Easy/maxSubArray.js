
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums){
  let local_max = 0, max = 0;

  for(let val of nums){
    local_max = local_max + val;
    if(local_max < 0){
      local_max = 0;
    }
    if(max < local_max){
      max = local_max;
    }
  }
  return max;
}
