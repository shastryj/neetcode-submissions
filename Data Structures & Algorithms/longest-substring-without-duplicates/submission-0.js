class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let map = new Map()
       let res = 0
       let l =0
       for(let r=0; r < s.length; r++){
            let char = s[r]
            if(map.has(char)){
                l = Math.max(map.get(char)+1, l)
            }
         map.set(char, r)
         res = Math.max(res, (r-l)+1)
       }
       return res
    }
}
