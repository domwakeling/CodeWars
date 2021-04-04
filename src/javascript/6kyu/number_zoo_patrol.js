// https://www.codewars.com/kata/5276c18121e20900c0000235

// return the missing number!
function findNumber(array) {
    let n = array.length + 1;
    return n * (n + 1) / 2 - array.reduce((tot, x) => tot + x, 0);
}