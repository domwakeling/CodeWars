// https://www.codewars.com/kata/594b898169c1d644f900002e

function execute(code) {

    let instrStr = code;

    // object to store patterns and array to store keys
    let progs = {};
    let keys = [];

    // find pattern definitions, store them and remove from the instructions set
    while (/p/.test(instrStr)) {
        // get the match and make a key
        let m = instrStr.match(/p(\d+)([LFRP0-9\(\)]*)q/);
        let newKey = "P" + m[1];
        // throw an error if the key already exists
        if (keys.indexOf(newKey) >= 0) {
            throw "Attempting to define the same pattern twice"
        }
        // store the new pattern, remove definition from instrStr, and update keys
        progs[newKey] = m[2];
        instrStr = (m[0].length == instrStr.length) ? '' : instrStr.slice(0, m.index) + instrStr.slice(m.index + m[0].length);
        keys = Object.keys(progs);
    }

    // loop to replace Pnn pattern-calls with the relevant pattern
    let maxLength = 1000;

    while (/P\d+/.test(instrStr)) {
        // throw an error if the instrStr length exceeds maxLength (assume this means we have a recursion)
        if (instrStr.length > maxLength) {
            throw "Instruction set too long, likely due to recursion in pattern definitions"
        }
        let m = instrStr.match(/P\d+/);
        // throw an error if the pattern is not defined
        if (keys.indexOf(m[0]) < 0) {
            throw "Pattern not defined";
        }
        instrStr = instrStr.slice(0, m.index) + progs[m[0]] + instrStr.slice(m.index + m[0].length);
    }

    // ** EVERYTHING BELOW HERE IS THE SAME AS FOR THE RS2 SPECIFICATION **

    // deal with the trivial case
    if (instrStr == "") return "*";

    // first deal with removing 'bracketed' elements
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