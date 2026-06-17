/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldtonew = new Map()
        return this.dfs(node, oldtonew)
    }

    dfs(node, oldtonew) {
        if(node == null){
            return null
        }

        if(oldtonew.has(node)){
            return oldtonew.get(node)
        }

        const copy = new Node(node.val)
        oldtonew.set(node, copy)

        for(const nei of node.neighbors){
            copy.neighbors.push(this.dfs(nei, oldtonew));
        }

        return copy
    }
}
