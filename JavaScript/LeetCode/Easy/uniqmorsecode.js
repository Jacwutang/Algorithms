// nternational Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
//
// For convenience, the full table for the 26 letters of the English alphabet is given below:
//
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
//
// Return the number of different transformations among all words we have.
//
// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
//
// There are 2 different transformations, "--...-." and "--...--.".

var uniqueMorseRepresentations = function(words) {

    let morseMap = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];


    let hash = {};
    let res = 0;
    let wordHash = {};

    for(let i = 97, j = 0; i <= 122; i++, j++){
        hash[String.fromCharCode(i)] = morseMap[j];
    }

    for(let i = 0; i< words.length; i++){
        let str = "";

        for(let j = 0; j < words[i].length;j++){
            str += hash[words[i][j]];

        }
        wordHash[words[i]] = str;

    }


    console.log(wordHash)


    let finalHash = {};

    for(var i in wordHash){

        if(finalHash[wordHash[i]] === undefined){
            finalHash[wordHash[i]] = wordHash[i];
        }
    }


    return Object.keys(finalHash).length;


};
