class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = []
        let subresult = []
        let backtrack = (leftpar, rightPar) => {
            if(leftpar === n && rightPar === n){
                result.push(subresult.join(''))
                return
            }

            if(leftpar < n){
                subresult.push('(')
                backtrack(leftpar+1, rightPar)
                subresult.pop()
            }
     
            if(rightPar < leftpar){
                subresult.push(')')
                backtrack(leftpar, rightPar+1)
                subresult.pop()
            }

        }

        backtrack(0, 0)
        return result
    }

}
