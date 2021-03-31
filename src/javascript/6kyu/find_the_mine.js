// https://www.codewars.com/kata/528d9adf0e03778b9e00067e

function mineLocation(field) {
    const n = field.length;
    for (let y = 0; y < n; y++) {
        let x = field[y].indexOf(1);
        if (x >= 0) return [y, x]
    }
    return false;
}