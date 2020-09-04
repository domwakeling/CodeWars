// https://www.codewars.com/kata/5bc027fccd4ec86c840000b7

function solve(n) {

    const digitSum = (num) => num.toString().split('').reduce((tot, d) => tot + parseInt(d), 0);

    // simple case - if n is in single digits, the answer will be n
    if (n < 10) return n;

    // every other case - make one number as many 9's as you can
    let l = n.toString().split('').length;
    let a = 0;
    for (let i = 0; i < l - 1; i++) {
        a = a + 9 * Math.pow(10, i);
    }
    let b = n - a;

    return digitSum(a) + digitSum(b);

}