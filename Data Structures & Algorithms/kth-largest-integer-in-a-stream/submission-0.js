class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.q = new MinPriorityQueue()
        this.k = k

        for (let num of nums){
            this.q.enqueue(num)
        }

        while(this.q.size() > k){
            this.q.dequeue()
        }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
         this.q.enqueue(val);
          if (this.q.size() > this.k) {
            this.q.dequeue();
        }
        return this.q.front()
    }
}
