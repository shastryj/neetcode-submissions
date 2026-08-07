// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null; 
        let map = new Map()
        let curr = head

        while(curr){
            let node = new Node(curr.val)
            map.set(curr, node)
            curr = curr.next
        }

        curr = head
        while(curr != null){
           let node = map.get(curr) ?? null
           node.next = map.get(curr.next) ?? null
           node.random = map.get(curr.random)
           curr= curr.next
        }

        return map.get(head)
    
    }
}
