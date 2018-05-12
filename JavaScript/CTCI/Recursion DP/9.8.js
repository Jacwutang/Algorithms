Given an infinite number of quartrs, dimes, nickels, and pennies. Calculate the number of ways to represent n cents.


function makeChange(n, let coins=[1,5,10,25]){
  let combos = new Array(n+1);
  combos.fill(0);
  combos[0] = 1;

  for(let i = 0; i < coins.length; i++){

    for(let amount = 0; amount <= n; amount++){
      if(amount >= coins[i]){
        combos[amount] += combos[amount-coins[i]];
      }
    }

  }

  return combos[n];


};
