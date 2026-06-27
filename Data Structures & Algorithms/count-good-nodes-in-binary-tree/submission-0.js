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
     * @return {number}
     */
    goodNodes(root) {
       let count = 0
       let dfs = (root, max) => {
          if(!root){
            return null;
          }
          if(max <= root.val){
            max = root.val
            count ++
          }
          dfs(root.left, max)
          dfs(root.right, max)
       }
       dfs(root, root.val)
       return count
    }
}
