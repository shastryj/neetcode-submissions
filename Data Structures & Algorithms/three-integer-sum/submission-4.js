class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)
        let res = []
        for (let i=0; i<nums.length; i++){
            if(nums[i]>0) break
            if(i>0 && nums[i]==nums[i-1]) continue
            let l = i+1
            let r = nums.length - 1
            while(l < r){
                let num = nums[i] + nums[l] + nums[r]
                if(num > 0){
                    r--
                }
                else if (num < 0){
                    l++
                }
                else {
                    let temp = []
                    temp.push(nums[i], nums[l], nums[r])
                    res.push(temp)
                    l++
                    r--

                while(l < r && nums[l] == nums[l-1]){
                    l++
                 }
                }
                
            }
        }
        return res
    }
}
