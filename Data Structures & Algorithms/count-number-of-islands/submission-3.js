class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
 dfs(i, j, grid, row, column) {
    if (i >= row || j >= column || i < 0 || j < 0) return;
    if (grid[i][j] === '0') return;

    grid[i][j] = '0';
    this.dfs(i+1, j, grid, row, column);
    this.dfs(i-1, j, grid, row, column);
    this.dfs(i, j+1, grid, row, column);
    this.dfs(i, j-1, grid, row, column);
 }

numIslands(grid) {
    let row = grid.length;
    let column = grid[0].length;
    let result = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] !== '0') {
                this.dfs(i, j, grid, row, column);
                result++;  // ← increment here
            }
        }
    }
    return result;  // ← return here
}


}
