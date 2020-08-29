// https://www.codewars.com/kata/583203e6eb35d7980400002a

//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(e => /^[;:](?:[-~])?[D)]$/.test(e)).length;
}