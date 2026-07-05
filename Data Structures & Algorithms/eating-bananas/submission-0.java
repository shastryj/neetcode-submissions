class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int left = 1;
        int right = Arrays.stream(piles).max().getAsInt();
        int res = right;

        while(left <= right){
            int m = (left + right)/2;
            int value = 0;
            for(int num : piles){
                value += Math.ceil((double) num / m);
            }

            if(value <= h){
                res = m;
                right = m-1;
            }
            else {
                left = m+1;
            }
        }

        return res;
    }
}
