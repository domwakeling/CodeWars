// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

function rot13(str) {
    const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const lo = "abcdefghijklmnopqrstuvwxyz".split('');

    return str
        .split('')
        .map(l => {
            if (up.indexOf(l) >= 0) {
                return up[(up.indexOf(l) + 13) % 26];
            } else if (lo.indexOf(l) >= 0) {
                return lo[(lo.indexOf(l) + 13) % 26];
            } else {
                return l;
            }
        })
        .join('')
}