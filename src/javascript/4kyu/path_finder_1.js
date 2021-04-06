// https://www.codewars.com/kata/5765870e190b1472ec0022a2

// pass in a node [x,y] and an arr of rows; returns an array [number, [array of vectors]] representing
// the number of untried paths and vectors for same
function openPaths(node, arr) {
    let count = 0;
    let dirs = []
    const x = node[0];
    const y = node[1];
    const h = arr.length;
    const w = arr[0].length;
    if (x > 0 && arr[y][x - 1] == '.') {
        count += 1;
        dirs.push([-1, 0]);
    }
    if (x < w - 1 && arr[y][x + 1] == '.') {
        count += 1;
        dirs.push([1, 0]);
    }
    if (y > 0 && arr[y - 1][x] == '.') {
        count += 1;
        dirs.push([0, -1]);
    }
    if (y < h - 1 && arr[y + 1][x] == '.') {
        count += 1;
        dirs.push([0, 1]);
    }
    return [count, dirs];
}

function pathFinder(maze) {
    // make a copy of the maze so that we can mess with it
    let m = maze.split('\n').map(elem => elem.split(''));
    let target = [m[0].length - 1, m.length - 1];

    // put our starting position in 'paths' array and set it as visited
    paths = [[0, 0]];
    m[0][0] = "*";

    // walk paths while we still have any new path available
    while (paths.length > 0) {

        let last = paths.length - 1;
        let routes = openPaths(paths[last], m);

        // routes[0] is the number of new open paths available; if > 0 ...
        if (routes[0] > 0) {
            // ... go with the first possible path ...
            newNode = [paths[last][0] + routes[1][0][0], paths[last][1] + routes[1][0][1]];
            m[newNode[1]][newNode[0]] = "*";
            paths.push(newNode)
            // and check if we're at the end ...
            if (newNode[0] == target[0] && newNode[1] == target[1]) return true;
        } else {
            // ... routes[0]==0 and there were no new paths  so pop last node off the 'paths' array
            paths.pop();
        }

    }

    // if we've got here we've explored all possible routes and didn't get to the end
    return false

}