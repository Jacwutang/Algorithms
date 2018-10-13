// Design an algorithm to find the maximum profit. You may complete as 1 transaction
// [7,1,5,3,6,4] => 5

var maxProfit = function(prices) {
    let max = 0, valley = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < prices.length; i++){

        if(prices[i] < valley){
            valley = prices[i];
        }

        if(prices[i] - valley > max){
            max = prices[i] - valley
        }

    }

    return max;
};
