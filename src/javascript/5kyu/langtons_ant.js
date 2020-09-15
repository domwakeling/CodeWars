// https://www.codewars.com/kata/58e6996019af2cff71000081

function ant(grid, column, row, n, dir = 0) {
    // deal with the null case
    if (n == 0) return grid

    console.log(grid, n)

    // functional programming takeaway - don't change the input
    let g = grid;
    let ant = { row, col: column, dir }
    // start cycling
    for (let _ = 0; _ < n; _++) {
        // turn left if 0, right if 1
        let cellCol = g[ant.row][ant.col];
        ant.dir = cellCol == 1 ? (ant.dir + 1) % 4 : ((ant.dir - 1) % 4 + 4) % 4;
        // change color
        g[ant.row][ant.col] = 1 - cellCol;
        // move forward one
        if (ant.dir % 2 == 1) {
            ant.col = ant.col + (ant.dir == 1 ? 1 : -1);
        } else {
            ant.row = ant.row + (ant.dir == 2 ? 1 : -1);
        }
        // check if the grid is large enough;
        if (ant.row == -1) {
            // need a new top row
            ant.row = 0;
            let temp = [];
            for (let i = 0; i < g[0].length; i++) {
                temp.push(0);
            }
            g.unshift(temp);
        } else if (ant.row == g.length) {
            // need a new bottom row
            let temp = [];
            for (let i = 0; i < g[0].length; i++) {
                temp.push(0);
            }
            g.push(temp);
        } else if (ant.col == -1) {
            // need new left column so extend each row by a '0' at front
            ant.col = 0;
            for (let i = 0; i < g.length; i++) {
                g[i].unshift(0)
            }
        } else if (ant.col == g[0].length) {
            // need new right column so extend each row by a '0' at end
            for (let i = 0; i < g.length; i++) {
                g[i].push(0);
            }
        }
    }

    return g;
}