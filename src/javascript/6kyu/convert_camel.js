// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
    return str.split(/[-_]/)
        .map((word, idx) => idx == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}