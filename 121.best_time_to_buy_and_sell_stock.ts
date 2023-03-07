function maxProfit(prices: number[]): number {
    if(prices.length === 0) return 0;
    let maxProfit: number = 0; let buyPrice: number; let sellPrice: number;

    buyPrice = sellPrice = prices[0];
    for(let i = 0; i < prices.length; i++) {
        if(buyPrice > prices[i])  {
            buyPrice = prices[i];
            sellPrice = buyPrice;
        } 
        if(sellPrice <= prices[i]) {
            sellPrice = prices[i];
            maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
        }
    }

    return maxProfit;
};
