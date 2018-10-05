// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Example:
//
// Input:  [1,2,3,4]
// Output: [24,12,8,6]


//Brute-force approach.
function productExceptSelf(nums){
  if(nums.length === 1)
    return nums;


  let result = [];
  let temp_arr = [];
  for(let i = 0; i < nums.length; i++){

    temp_arr = nums.slice(0,i).concat(nums.slice(i+1));

    result.push( temp_arr.reduce((product,el) =>
        product * el;
    ));

  }

  return result;

}


function productExceptSelf(nums){
  
}
