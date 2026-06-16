class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []
        let subresult = []
    
        let calculateCombination = (i, currentSum) => {

           if(currentSum === target){
              result.push([...subresult])
              return
           }
           if (i === nums.length || currentSum > target) return;

           subresult.push(nums[i])
           calculateCombination(i, currentSum+nums[i])
           subresult.pop()
           calculateCombination(i+1, currentSum)
        }

        calculateCombination(0,0)
        return result
    }
}
