// https://www.codewars.com/kata/526233aefd4764272800036f

function matrixAddition(a, b) {
    return a.map((row, row_idx) => row.map((col, col_idx) => col + b[row_idx][col_idx]));
}