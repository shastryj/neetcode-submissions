class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let stack = []
       let dict = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
       }
       for(let char of s){
         if(dict[char]){
            if(stack.length > 0 && stack[stack.length-1] === dict[char]){
                stack.pop()
            }
            else {
                return false
            }
         }
         else {
            stack.push(char)
         }
       }

       return stack.length === 0
    }
}
