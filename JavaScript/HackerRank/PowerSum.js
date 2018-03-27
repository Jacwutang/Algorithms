// Find the number of ways that a given integer, , can be expressed as the sum of the powers of unique, natural numbers.
//
// Input Format
//
// The first line contains an integer X
// The second line contains an integer N
//
// X = 100
// N = 2
//
// 10^2 , 6^2+8^2, 1^2 + 3^2 + 4^2 + 5^2 + 7^2


function powerSum(X, N, vals = []) {
    // x = 10, n = 2, vals = sums so far



    let sum = 0;
    vals.forEach( (val) => {
        sum = sum + Math.pow(val,N);
    });



    if(sum === X){
        return 1;
    } else{
        //get last value and add 1
        let v = 0;

        if(vals.length === 0){
            v = 1;
        } else{
            v = vals[vals.length - 1] + 1;
        }


        let answer = 0;

        while(sum + Math.pow(v,N) <= X){


            answer += powerSum(X,N, vals.concat([v]));
            v += 1;

        }

        return answer;


    }



}
