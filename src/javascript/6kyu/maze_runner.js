// https://www.codewars.com/kata/58663693b359c4a6560001d6

function mazeRunner(maze, directions) {
    // maze size
    const w = maze[0].length;
    const h = maze.length;

    // get initial position
    let coords = [-1, -1];
    for (let y = 0; y < h; y++) {
        if (maze[y].indexOf(2) >= 0) {
            coords = [maze[y].indexOf(2), y];
            break;
        }
    }

    // run through instructions
    for (d of directions) {
        switch (d) {
            case 'N':
                coords[1] -= 1;
                break;
            case 'E':
                coords[0] += 1;
                break;
            case 'S':
                coords[1] += 1;
                break;
            case 'W':
                coords[0] -= 1;
                break;
        }

        if (coords[0] < 0 || coords[0] >= w || coords[1] < 0 || coords[1] >= h || maze[coords[1]][coords[0]] == 1) {
            return "Dead";
        } else if (maze[coords[1]][coords[0]] == 3) {
            return "Finish";
        }
    }

    // if we haven't returned yet ...
    return "Lost";

}