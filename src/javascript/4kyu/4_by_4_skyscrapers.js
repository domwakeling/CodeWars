// https://www.codewars.com/kata/5671d975d81d6c1c87000022

// Determine how many blocks can be seen given heights 1...n; use recursion
// (this and console logging issues really demonstrated the benefit of tests!)
function howManyBlocks(line) {
    if (line[1] >= line.length && line[1] > line[0]) {
        return 2
    } else if (line.length == 1 || line[0] >= line.length) {
        return 1;
    } else {
        let idx = line.indexOf(line.length);
        return howManyBlocks(line.slice(0, idx)) + 1;
    }
}

// Determine possible permutations of digits 1...n
function permutations(n) {
    // get am ordered array of numbers
    let inpArr = [];
    for (let i = 0; i < n; i++) inpArr.push(i + 1);

    // iterative generator of permutations (hard-code length == 2 to get arrays)
    const permuteArr = (arr) => {
        if (arr.length == 1) {
            return arr;
        } else if (arr.length == 2) {
            return [[arr[0], arr[1]], [arr[1], arr[0]]];
        } else {
            let ret = [];
            for (let i = 0; i < arr.length; i++) {
                let lessArr = arr.filter((_, idx) => idx != i);
                let lessArrPerms = permuteArr(lessArr);
                lessArrPerms.map(n => n.unshift(arr[i]));
                ret = ret.concat(lessArrPerms);
            }
            return ret;
        }
    }

    // run inpArr through the perumteArr
    return permuteArr(inpArr);
}

function solvePuzzle(clues) {

    let size = clues.length / 4;
    let allPerms = permutations(size);
    let numPerms = allPerms.length;

    // start with a 'quasi grid' which will have 'size' single integer entries corresponding to permutations;
    // fill it with 0s (auto fail!) and set up a pointer telling us current row (which will be the last row);
    // will only convert to a real grid when ready to return
    let grid = [];
    for (let i = 0; i < size; i++) { grid.push(0) }
    let pointer = size - 1;

    const testClues = () => {
        for (let i = 0; i < clues.length; i++) {
            if (clues[i] !== 0) {
                let side = Math.floor(i / 4);
                let dist = i - side * size;
                if (side == 0) {
                    // top, counting right
                    let temp = grid.map(n => allPerms[n][dist]);
                    if (howManyBlocks(temp) !== clues[i]) return false;
                } else if (side == 1) {
                    // right, counting down
                    let temp = allPerms[grid[dist]];
                    let rev = temp.map((_, idx) => temp[temp.length - 1 - idx]);
                    if (howManyBlocks(rev) !== clues[i]) return false;
                } else if (side == 2) {
                    // bottom, counting left
                    let rev = grid.map((_, idx) => grid[grid.length - 1 - idx]);
                    let temp = rev.map(n => allPerms[n][3 * size - 1 - i]);
                    if (howManyBlocks(temp) !== clues[i]) return false;
                } else {
                    // right, counting up
                    let temp = allPerms[grid[clues.length - 1 - i]];
                    if (howManyBlocks(temp) !== clues[i]) return false;
                }
            }
        }
        // haven't thrown a fail, so passing
        return true;
    }

    const testUnique = () => {
        // check rows are unique
        let rows = new Set(grid);
        if (rows.size !== size) return false;

        // check columns are unique
        for (let i = 0; i < size; i++) {
            let col = new Set(grid.map(n => allPerms[n][i]));
            if (col.size !== size) return false;
        }

        // rows and columns unique, good to go
        return true;
    }

    // logic to find an answer; loop until an answer is found, with
    // a test that will return false (bool) if we can't find a solution
    let found = false;
    while (!found) {
        // see if this solution works and if so we will exit the while loop
        found = testUnique() && testClues();
        // if not, we need to move to the next iteration ...
        if (!found) {
            let advanced = false;
            let backtracking = false;
            // ... but need to check whether the current pointer position is at max,
            // and if so (a) work back to a pointer position that can be incremented
            // and then (b) change all positions past that pointer back to 0 again
            while (!advanced) {
                grid[pointer] = grid[pointer] + 1;
                if (grid[pointer] < numPerms) {
                    if (backtracking) {
                        let n = 1;
                        while (pointer + n < size) {
                            grid[pointer + n] = 0;
                            n++;
                        }
                        pointer = size - 1;
                    }
                    advanced = true;
                } else {
                    // need to step back;
                    backtracking = true;
                    pointer = pointer - 1;
                    if (pointer < 0) return false; // we've exhausted attempts to solve
                }
            }
        }
    }

    // ready to return, now convert the quasi grid to a real grid
    return grid.map(n => allPerms[n]);
}