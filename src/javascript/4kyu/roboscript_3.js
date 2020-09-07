// https://www.codewars.com/kata/58738d518ec3b4bf95000192

function execute(code) {
    // deal with the trivial case
    if (code == "") return "*";

    // first deal with removing 'bracketed' elements
    let instrStr = code;
    // loop this code removing brackets & replacing with repeats of instructions within
    while (/\(/.test(instrStr)) {
        let m = instrStr.match(/\(((?:[LFR]\d*)+)\)(\d*)/);
        let r = m[1].repeat(m[2].length > 0 ? parseInt(m[2]) : 1);
        instrStr = instrStr.slice(0, m.index) + r + instrStr.slice(m.index + m[0].length);
    }

    // ** EVERYTHING BELOW THIS IS THE SAME AS FOR THE RS1 SPECIFICATION **
    // split the instructions down - want one long array with all instructions in order, so "F3" will become "F", "F", "F"
    let splitInstructions = instrStr.match(/([FLR]\d*)/g);
    let instructions = [];
    splitInstructions.forEach(item => {
        if (item.length == 1) {
            instructions.push(item);
        } else {
            item = item.split('');
            let instr = item.shift();
            for (let i = 0; i < parseInt(item.join('')); i++) {
                instructions.push(instr)
            }
        }
    });

    // set up grid
    let grid = [["*"]];
    let robot = {
        col: 0,
        row: 0,
        dir: 1
    }

    // run through instructions ...
    for (let i = 0; i < instructions.length; i++) {
        let instr = instructions[i];
        if (instr == "F") {
            // change robot location based on direction (this could be tidier, but is OK)
            switch (robot.dir) {
                case 0:
                    robot.row = robot.row - 1;
                    break;
                case 1:
                    robot.col = robot.col + 1;
                    break;
                case 2:
                    robot.row = robot.row + 1;
                    break;
                case 3:
                    robot.col = robot.col - 1;
                    break;
            }
            // deal with issues where the robot has stepped outside the current grid ...
            if (robot.row < 0) {
                // robot is in row '-1' so add a new row of spaces at front of grid and change robot's location to row 0
                robot.row = robot.row + 1;
                let temp = [];
                for (let n = 0; n < grid[0].length; n++) {
                    temp.push(" ");
                }
                grid.unshift(temp);
            } else if (robot.row >= grid.length) {
                // robot is one row below current grid, add a new row of spaces at the end
                let temp = [];
                for (let n = 0; n < grid[0].length; n++) {
                    temp.push(" ");
                }
                grid.push(temp);
            } else if (robot.col < 0) {
                // robot is in a column one left of the grid - add a new space at front of each row and change robot's location to column 0
                robot.col = robot.col + 1;
                for (let n = 0; n < grid.length; n++) {
                    grid[n].unshift(" ");
                }
            } else if (robot.col >= grid[0].length) {
                // robot is one row to the right of the grid - extend each row with a space
                for (let n = 0; n < grid.length; n++) {
                    grid[n].push(" ");
                }
            }
            // now we know grid is big enough, change current (new) location to a * to show it's been travelled
            grid[robot.row][robot.col] = "*";
        } else if (instr == "L") {
            // turn left - so dir = dir -1, but to make modulo-4 work it's -1+4 so -3
            robot.dir = (robot.dir + 3) % 4
        } else if (instr == "R") {
            // turn right
            robot.dir = (robot.dir + 1) % 4;
        }
    }

    // map each row into a continuous string, then join each row with \r\n to output one overall string
    return grid.map(row => row.join('')).join('\r\n');
}