// https://www.codewars.com/kata/54da539698b8a2ad76000228

function countInArray(arr, target) {
    return arr.filter(x => x == target).length;
}

function isValidWalk(walk) {
    return walk.length == 10 & countInArray(walk, 'n') == countInArray(walk, 's') && countInArray(walk, 'w') == countInArray(walk, 'e');
}