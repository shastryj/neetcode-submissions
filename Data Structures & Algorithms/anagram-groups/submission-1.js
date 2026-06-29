class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const res = {}
       for (let str of strs){
        let array = new Array(26).fill(0)
         for (let c of str){
           array[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
         }
         array.join(',')
         if(!res[array]){
            res[array] = []
         }
         res[array].push(str)
       }

       return Object.values(res)
    }
}
