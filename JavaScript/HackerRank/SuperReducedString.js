// Steve has a string, , consisting of  lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after  operation.
//
// Steve wants to reduce  as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing 's non-reducible form!
//
//
//
//
//
// aaabccddd
//
// abd
//
//
// Steve can perform the following sequence of operations to get the final string:
//
// aaabccddd → abccddd
// abccddd → abddd
// abddd → abd

function super_reduced_string(s){

    let reduced = true;

    while(reduced){

        reduced = false;

        for(let i = 0; i < s.length; i++){

            if(s[i] === s[i+1]){
                s = s.slice(0,i) + s.slice(i+2)
                reduced = true;
                break;
            }

        }


    }

    s = (s.length === 0)? "Empty String": s;

    return s;

}

// Use a stack for this. If current char = top of stack. Pop the stack, else push it into stack
