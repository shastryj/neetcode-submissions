class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []
        const dfs = (i, cursum, subset) => {
           if(cursum === 0){
               res.push([...subset])
               return
           }

           if (cursum < 0 || i >= nums.length) return;

           subset.push(nums[i])
           dfs(i, cursum-nums[i], subset)
           subset.pop()
           dfs(i+1, cursum, subset)
        }
        dfs(0, target, [])
        return res

    }
}
