/**
 * Definition for singly-linked list.
 * class ListListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListListNode} list1
     * @param {ListListNode} list2
     * @return {ListListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr = new ListNode(0, null)
        let res = curr
        while(list1!=null && list2!=null){

            if(list1.val < list2.val){
                let node = new ListNode(list1.val, null)
                curr.next = node
                curr = curr.next
                list1 = list1.next
            }

            else {
                let node = new ListNode(list2.val, null)
                curr.next = node
                curr = curr.next
                list2 = list2.next
            }
        }

        if(list1 == null){
           curr.next = list2
        }
        else {
            curr.next = list1
        }
        
        return res.next

    }
}
