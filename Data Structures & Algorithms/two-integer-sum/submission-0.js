class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
twoSum(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];  // index of complement, current index
        }
       map[nums[i]] = i   // add AFTER checking
    }
    return [];
}
}
