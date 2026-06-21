class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0]
        let curmin = 1
        let curmax = 1
        for(let num of nums){
            let temp = num * curmax
            curmax = Math.max(num, Math.max(temp, num * curmin))
            curmin = Math.min(num, Math.min(temp, num * curmin))
            res = Math.max(res, curmax)
        }
    return res

    }
}
