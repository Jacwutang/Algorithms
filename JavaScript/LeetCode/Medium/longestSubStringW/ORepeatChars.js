Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
             


var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let hash = {};

    let left = 0, right = 0;
    while( left < s.length && right < s.length) {
        if(!hash[s[right]]) {
            hash[s[right]] = true;
            right += 1;
        } else {
            delete hash[s[left]];
            left+=1;
        }

        max = Math.max(max, right - left);
    }

    return max;
};
