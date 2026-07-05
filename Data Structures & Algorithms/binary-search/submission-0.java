class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length;
        while(left < right){
            int m = left + (right - left) / 2;
            if(nums[m] >= target){
                right = m;
            }
            else {
               left = m+1;
            }
        }
        return (left < nums.length && nums[left] == target) ? left : -1;
    }
}
