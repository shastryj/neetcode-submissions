class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = []
        nums.sort((a,b) => (a-b))
        let subsets = (i, subset) => {
            if(i === nums.length){
                result.push([...subset])
                return
            }
            subset.push(nums[i])
            subsets(i+1, subset)
            subset.pop()
            while(i+1<nums.length && nums[i]==nums[i+1]){
                i=i+1
            }
            subsets(i+1, subset)
        }
        subsets(0, [])
        return result
    }
}
