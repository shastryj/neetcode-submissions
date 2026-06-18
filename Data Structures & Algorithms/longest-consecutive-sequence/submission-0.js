class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set()
        let maxcount = 0
        for (let num of nums){
            set.add(num)
        }
        for(let num of nums){
            let localcount = 1
            let numcopy = num
            while(set.has(numcopy+1)){
                numcopy++
                localcount++
            }
            maxcount = Math.max(localcount, maxcount)
        }
        return maxcount
    }
}
