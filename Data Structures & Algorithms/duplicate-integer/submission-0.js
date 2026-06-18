class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let myset = new Set()
        for (let i of nums){
            if(myset.has(i)){
                return true
            }
            myset.add(i)
        }

        return false
    }
}
