class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goal = nums.length-1;
        for (let i=goal; i>-1; i--) {
            if(i+nums[i]>=goal){
                goal = i
            }
        }
        return goal === 0   

    }


}
