class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        let result = []
        let subresult = []
        const dfs = (i) => {
            if(i == nums.length){
                result.push([...subresult])
                return
            }
            
            subresult.push(nums[i])
            dfs(i+1)

            subresult.pop()
            dfs(i+1)
        }
        dfs(0)
        return result
    }
}
