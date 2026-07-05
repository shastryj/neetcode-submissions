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

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // FIX: save second half start and cut the link
    let secondHead = slow.next
    slow.next = null

    let prev = null
    let next = null 
    let cur = secondHead  // start from secondHead, not slow

    while(cur != null){
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    let first = head
    let second = prev
    while(second !== null){
        const temp1 = first.next
        const temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2
    }
}
}
