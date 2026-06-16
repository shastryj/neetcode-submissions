class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
   let maxsum = nums[0]
   let sum = 0
   for (let i =0; i< nums.length; i++){
      if(sum < 0){
        sum = nums[i];
      }
      else {
        sum = sum + nums[i]
      }
    maxsum = Math.max(sum, maxsum)
   }
   return maxsum 

    }
}
