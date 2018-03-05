// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
//
// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
//

//Approach 1: use alphabet array and add indexof current letter to the offset.
// Approach 2: use ASCII values 

function caesarCipher(s, k) {

    let res = "";

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');


    for(let i = 0; i < s.length; i++){
        if(alphabet.indexOf(s[i].toLowerCase()) === -1){
            res += s[i];
            continue;
        }

        if(s[i].toUpperCase() === s[i]){
            let currentIdx = alphabet.indexOf(s[i].toLowerCase());
            let newIdx = (currentIdx + k) % 26


            res += alphabet[newIdx].toUpperCase();

        } else{
             let currentIdx = alphabet.indexOf(s[i]);
             let newIdx = (currentIdx + k) % 26


             res += alphabet[newIdx];

        }

      }

    return res;
}
