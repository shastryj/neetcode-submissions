class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let row = grid.length;
        let column = grid[0].length;
        let area = 0;

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                if (grid[i][j] !== 0) {
                    let localArea = this.dfs(i, j, grid, row, column);
                    area = Math.max(area, localArea);
                }
            }
        }
        return area // ← return here

    }

  dfs(i, j, grid, row, column) {
    if (i >= row || j >= column || i < 0 || j < 0) return 0;
    if (grid[i][j] === 0) return 0;

    grid[i][j] = 0;
    return 1 +                                        // this cell
        this.dfs(i+1, j, grid, row, column) +         // down
        this.dfs(i-1, j, grid, row, column) +         // up
        this.dfs(i, j+1, grid, row, column) +         // right
        this.dfs(i, j-1, grid, row, column);  
 }

}
