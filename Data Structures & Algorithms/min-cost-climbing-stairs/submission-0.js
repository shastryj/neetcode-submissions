class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let mem = {}
        // 1 ,2, 3 = 2
        let dfs = (i) => {
            if(i >= cost.length){
                return 0;
            }
            if(mem[i] !== undefined){
                return mem[i]
            }

            mem[i] = cost[i] + Math.min(dfs(i+1), dfs(i+2));
            return mem[i]
            
        }
        return Math.min(dfs(0), dfs(1))
    }
}
