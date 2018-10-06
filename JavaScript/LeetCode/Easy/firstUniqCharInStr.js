// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.

var firstUniqChar = function(s) {
    let hash = {};

    for(let char of s){
        if(hash[char] === undefined){
            hash[char] = 1;
        }else{
            hash[char] += 1;
        }
    }

    for(let [key,val] of Object.entries(hash)){
        if(val === 1){
            return s.indexOf(key);
        }
    }

    return -1;
};
