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
        if (!node) return null;
        const oldtonew = new Map()
        const q = new Queue()
        q.push(node)
        oldtonew.set(node, new Node(node.val))
        while(!q.isEmpty()){
             const cur = q.pop();
            for(const nei of cur.neighbors){
               if(!oldtonew.has(nei)){
                    oldtonew.set(nei, new Node(nei.val))
                     q.push(nei)
               }
              oldtonew.get(cur).neighbors.push(oldtonew.get(nei));  
            }
           
        }
        return oldtonew.get(node);
    
    }


}
