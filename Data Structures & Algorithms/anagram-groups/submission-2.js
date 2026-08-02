class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let res = {};
      for(let str of strs){
        let key = new Array(26).fill(0);
        for (let c of str){
            key[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        key.join(',');
        if(!res[key]){
            res[key] = [];
        }
        res[key].push(str);
      }
      return Object.values(res);

    }
}
