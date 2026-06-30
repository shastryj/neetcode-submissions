class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for(const num of nums){
            count[num] = (count[num] || 0) + 1
        }

        let q = new MinPriorityQueue((x)=>x[1])
        for( const [num , cnt] of Object.entries(count)){
            q.enqueue([num, cnt])
             if (q.size() > k) q.dequeue();
        }
       

        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, cnt] = q.dequeue();
            res.push(num);
        }

        return res


    }
}
