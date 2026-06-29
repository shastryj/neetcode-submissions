class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let res = 0
        for(let r=1; r<prices.length; r++){
            if(prices[r] < prices[l]){
                l = r 
            }
            res = Math.max(prices[r]-prices[l], res)
        }

        return res
    }
}
