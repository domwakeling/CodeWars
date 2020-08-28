// https://www.codewars.com/kata/52597aa56021e91c93000cb0

var moveZeros = function (arr) {
    let t = arr.filter(e => e !== 0);
    while (t.length < arr.length) t.push(0);
    return t;
}