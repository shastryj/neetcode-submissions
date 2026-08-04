class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if(s1.length > s2.length){
            return false
        }

        let s1count = new Array(26).fill(0)
        let s2count = new Array(26).fill(0)

        for (let i=0; i<s1.length; i++){
            s1count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }

        for (let i=0; i<s1.length; i++){
            s2count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }

        const ismatch = () => s1count.every((c, i)=> c ==s2count[i])

        let l=0

        for(let r=s1.length; r<s2.length; r++){
            if(ismatch()) return true
            s2count[s2.charCodeAt(l) - 'a'.charCodeAt(0)]--
            s2count[s2.charCodeAt(r) - 'a'.charCodeAt(0)]++
            l++
        }

        return ismatch()

    }
}
