class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let memo = {}
      
        const dfs = (amount) => {
            if(amount == 0) return 0;
            if(memo[amount] !== undefined) return memo[amount]
            let min = Infinity
            for(let coin of coins){
                if(amount - coin >= 0){
                    min = Math.min(min, 1+dfs(amount - coin))
                }
            }
            memo[amount] = min
            return min
        }
        const minCoins = dfs(amount);
        return minCoins === Infinity ? -1 : minCoins;
    }

}
