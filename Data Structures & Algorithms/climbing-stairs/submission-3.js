class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
climbStairs(n) {
    let dp = new Array(n).fill(0)
    dp[1] = 1
    dp[2] = 2
    if(n<=2){
        return dp[n]
    }
    for (let i = 3; i<=n; i++) {
        dp[i] = dp[i-2] + dp[i-1]
    }
    return dp[n]
                              
}

}
