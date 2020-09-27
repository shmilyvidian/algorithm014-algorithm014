// 200. 岛屿数量
// 沉没原则
var numIslands = function(grid) {
    let count = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++
                dfs(i,j)
            }
        }
    }
    function dfs(row, col){
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') return
        grid[row][col] = '0'
        dfs(row+1, col)
        dfs(row-1, col)
        dfs(row, col+1)
        dfs(row, col-1)
    }
    return count
};