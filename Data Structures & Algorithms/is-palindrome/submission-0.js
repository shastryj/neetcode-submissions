class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !this.isAlphaNumeric(s.charAt(left)))  left++;
        while (right > left && !this.isAlphaNumeric(s.charAt(right))) right--;

        if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;   // ← only reached if ALL pairs matched
}

    isAlphaNumeric(c){
         return (c >= 'A' && c <= 'Z' ||
                c >= 'a' && c <= 'z' ||
                c >= '0' && c <= '9');
    }
}
