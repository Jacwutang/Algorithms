// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//
// Given two integers x and y, calculate the Hamming distance.
//
// Note:
// 0 ≤ x, y < 231.
//
// Example:
//
// Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
//
// The above arrows point to positions where the corresponding bits are different.




var hammingDistance = function(x, y) {
   let res = x^y;

   var binary = convertToBinary(res);
   var count = 0;


   for(var x = 0; x < binary.length; x++){
    if(binary[x] === '1')
        count +=1;
   }

    return count;


};

var convertToBinary = function(num){
   let result = "";


     if(num < 1)
        return '';

    return convertToBinary(Math.floor(num/2)) + (num % 2).toString();



}
