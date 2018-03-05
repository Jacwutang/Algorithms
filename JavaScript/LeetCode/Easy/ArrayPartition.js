// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
//
// Example 1:
// Input: [1,4,3,2]
//
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// Note:
// n is a positive integer, which is in the range of [1, 10000].
// All the integers in the array will be in the range of [-10000, 10000].


// Approach:
// sort the numbers. Then take the min of each unique pair. This gurantees that you'll always pick from the set of higher numbers.

var arrayPairSum = function(nums) {
    let sortedArr = nums.sort((a,b) =>  b - a);
    let sum = 0;
    //[4,3,2,1]

    console.log(sortedArr);

    //min(4,3) + min (2,1) --> 4
    // min(1,2) + min(3,4) --> 4

    let idx1 = 0;
    let idx2 = 1;

    for(let i = 0; i < Math.floor(nums.length/2); i++){
        sum += Math.min(nums[idx1], nums[idx2]);
        // console.log(`sum: ${sum}, idx1: ${idx1}, idx2: ${idx2}`)
        idx1 += 2;
        idx2 += 2;
    }



    return sum;


};
