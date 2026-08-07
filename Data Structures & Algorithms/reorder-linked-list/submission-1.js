/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
      let slow = head
      let fast = head

      while(fast && fast.next!=null){
        slow = slow.next
        fast = fast.next.next
      }

      let second = slow.next
      slow.next = null

      //reverse the second half
      let cur = second
      let next = null
      let prev = null

      while(cur!=null ){
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next 
      }

      let first = head
      second = prev

      while(second != null){
        const tmp1 = first.next
        const tmp2 = second.next
        first.next = second
        second.next = tmp1
        first = tmp1
        second = tmp2
      }
   
    }
}
