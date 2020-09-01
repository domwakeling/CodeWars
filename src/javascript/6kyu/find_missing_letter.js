// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
    let a = array.map(s => s.charCodeAt(0));
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i + 1] - a[i] !== 1) {
            return String.fromCharCode(a[i] + 1);
        }
    }
    return 'error'
}