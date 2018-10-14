// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
    let soln = [], j = 0, k = nums.length - 1;
    nums = nums.sort((a,b) => a - b);


    for(let i = 0; i < nums.length - 2; i++){
        let complement = nums[i] * -1;
        j = i+1;
        k = nums.length - 1;

        if (i > 0 && nums[i] == nums[i-1]){
           continue;
        }
        while (j < k) {
                if(nums[j] + nums[k] === complement){
                    soln.push([nums[i], nums[j], nums[k]]);
                    let tripletA = nums[j];
                    let tripletB = nums[k];
                    //Roll ahead
                    while(j < k && nums[j] == tripletA) j++;
                    // Roll inwards
                    while(j < k && nums[k] == tripletB) k--;

                }
                else if(nums[j] + nums[k] < complement){
                j += 1;
                }
                else{
                k -= 1;
                }
        }



    }

    return soln;


};
