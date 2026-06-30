class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minheap = new MinPriorityQueue()
        for(let num of nums){
            minheap.enqueue(num)
        }
        while(minheap.size() > k){
            minheap.dequeue()
        }
        return minheap.front()
    }
}
