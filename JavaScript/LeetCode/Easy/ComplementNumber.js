// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
//
// Note:
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.
// Example 1:
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.


var findComplement = function(num) {

    let binary = convertToBinary(num);
    let complement = "";

    binary.split('').forEach((char) => {
        let pushed = (char === '1')? '0': '1';
        complement += (pushed);
    })


    let j = 1;
    let sum = 0;
   for(let i = complement.length - 1; i >= 0; i--, j *= 2){
       if(complement[i] === '1' ){
           sum += j;
       }
   }
    return sum;
};


function convertToBinary(num){

    if(num < 1)
        return '';

    let res = convertToBinary(Math.floor(num/2)) + (num % 2).toString();
    return res;

    // return 101
}
