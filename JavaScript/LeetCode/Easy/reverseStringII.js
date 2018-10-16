// Given an input string , reverse the string word by word.
//
// Example:
//
// Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
// Note:
//
// A word is defined as a sequence of non-space characters.
// The input string does not contain leading or trailing spaces.
// The words are always separated by a single space.

var reverseWords = function(str) {
    str = str.reverse();
    let i = 0;
    let j = 0;
    let marker = 0;

    while(i < str.length){

        while(str[i] == ' ') i++;
        j = i + 1;
        while(str[j] != ' ' && j < str.length) j++;
        marker = j;

        for(let x = i, y = j-1; x < y; x++, y--){
            let copy = str[x];
            str[x] = str[y];
            str[y] = copy;
        }
        i = marker;

    }
};
