class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resindex = 0
        let reslen = 0
        for(let i =0; i<s.length; i++) {
            //for odd length
            let l = i
            let r = i
            while(l>=0 && r<s.length && s.charAt(l) == s.charAt(r)){
                    if((r-l+1) > reslen){
                        reslen = r-l+1
                        resindex = l 
                    }
                 l--
                 r++                  
            }

             //for even length
            l = i
            r = i+1
            while(l>=0 && r<s.length && s.charAt(l) == s.charAt(r)){
                    if((r-l+1) > reslen){
                        reslen = r-l+1
                        resindex = l 
                    }
                 l--
                 r++                  
            }
        }
        return s.substring(resindex, resindex + reslen)
    }
}
