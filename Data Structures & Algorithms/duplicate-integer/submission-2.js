class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let key = {}
        for (let i of nums){
            if(key[i]){
                return true
            }
            key[i] = true
          
        }

        return false
    }
}
