// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
// Input:
// 11110
// 11010
// 11000
// 00000
//
// Output: 1
// Example 2:
//
// Input:
// 11000
// 11000
// 00100
// 00011
//
// Output: 3

var numIslands = function(grid) {
    // let cache = [...Array(grid.length)].map((el) => Array(grid[0].length).fill(false));
    let count = 0;

    for(let row = 0; row < grid.length; row++) {

        for(let col = 0; col < grid[0].length; col++){

            if (grid[row][col] == 1) {
                count += 1;
                dfs(grid,row,col);
            }

        }
    }

    return count;


};

function dfs (grid,row,col) {
   if ( (row < 0 || row > grid.length - 1) || (col < 0 || col > grid[0].length - 1) ) {
       return;
   } else if (grid[row][col] == 0){
       return;
   }
   grid[row][col] = 0;

   dfs(grid,row-1,col);
   dfs(grid,row,col-1);
   dfs(grid,row+1,col);
   dfs(grid,row, col + 1);

}
