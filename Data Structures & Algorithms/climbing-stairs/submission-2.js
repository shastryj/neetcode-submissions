class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
climbStairs(n) {
    let mem = {};
    const dfs = (current) => {
        if (current > n) return 0;                 // overshot → 0 ways
        if (current === n) return 1;               // landed exactly → 1 way
        if (mem[current] !== undefined) return mem[current];

        mem[current] = dfs(current + 1) + dfs(current + 2);  // sum the two choices
        return mem[current];
    };
    return dfs(0);                                 // start from 0 steps climbed
} 
}
