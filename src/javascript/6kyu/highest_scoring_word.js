// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
    const offset = 'a'.charCodeAt(0) - 1;
    let words = x.split(' ');

    const wordScore = (word) => {
        return word.split('').reduce((tot, l) => tot + l.charCodeAt(0) - offset, 0);
    }

    return words.reduce((curr, next) => wordScore(next) > wordScore(curr) ? next : curr, '');
}