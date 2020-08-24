// https://www.codewars.com/kata/55466989aeecab5aac00003e

function sqInRect(lng, wdth, first = true) {
    // added a new param which defaults to true - test if originally passed a square ...
    if (lng == wdth) {
        // ... and if so return null
        if (first) return null;
        // ... otherwise if we have a square, we can finish the puzzle
        return [lng];
    } else {
        // ... otherwise we have a rectangle, so deduct square and ask for solution of the remainder
        // ... which has 'first' as false since this isn't what we were passed ...
        let size = Math.min(lng, wdth);
        return [size].concat(sqInRect(Math.max(lng, wdth) - size, size, false));
    }
}