var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1);
  dp.fill(amount + 1);
  dp[0] = 0;

  for (let j = 0; j < coins.length; j++) {
    for (let i = 1; i < dp.length; i++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
