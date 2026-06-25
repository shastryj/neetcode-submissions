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
   isSubtree(root, subRoot) {
    let isSameTree = (r, s) => {
        if (r == null && s == null) return true;
        if (r == null || s == null) return false;
        if (r.val !== s.val) return false;
        return isSameTree(r.left, s.left) && isSameTree(r.right, s.right);
    };

    if (root == null) return false;                          // nothing left to search
    if (isSameTree(root, subRoot)) return true;              // match found here
    return this.isSubtree(root.left, subRoot) ||             // search left subtree
           this.isSubtree(root.right, subRoot);              // search right subtree
}
}
