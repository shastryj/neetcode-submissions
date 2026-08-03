class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let l = 0
       let r = heights.length -1 
       let sum = 0
       while(l < r){
         sum = Math.max(sum, Math.min(heights[l], heights[r]) * (r-l))
          if(heights[r]<heights[l]){
            r--
          }
          else {
            l++
          }
       }
       return sum
    }
}
