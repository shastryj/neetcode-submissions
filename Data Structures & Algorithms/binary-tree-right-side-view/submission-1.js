/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let res = []
        if(!root){
            return res
        }
        
        let q = new Queue()
        q.push(root)
        while(!q.isEmpty()){
           let rightside = null
           let size = q.size()

           for(let i=0; i<size; i++){
              const node = q.pop()
              if(node){
                rightside = node
                q.push(node.left)
                q.push(node.right)
              }
           }
           if(rightside) {
            res.push(rightside.val)
           }
        }
       return res
    }
}
