// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

var maxProfit = function(prices) {
  //only care about consecutive peaks.

  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }

  return max;
};

console.log(maxProfit([7,1,5,3,6,4]) === 7));
