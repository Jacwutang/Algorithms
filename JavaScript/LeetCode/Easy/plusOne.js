// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//
// Example 1:
//
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
//
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.


var plusOne = function(digits) {
   let carry = 0, sum = 0;
    let i = digits.length - 1;
    if(digits[i] + 1 >= 10){
        digits[i] = 0;
        carry = 1;
    } else{
        digits[i] = digits[i] + 1;
    }
    i--;

    while(i >= 0 && carry > 0){
        sum = digits[i] + carry;
        if(sum >= 10){
            carry = 1;
            digits[i]  = 0;
        } else{
            digits[i] = sum;
            carry = 0;
        }
        i--;
    }



    if(carry > 0){

        digits.splice(0,0,carry);
    }

    return digits;

};
