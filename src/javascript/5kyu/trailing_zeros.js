// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

// implement memory to cope with testing timeouts over large number ranges
// previous contains an (unordered) set of previous results as [n/5, count]
let previous = [[0, 0]];

function zeros(n) {
    if (n <= 0) return 0;
    let f = Math.floor(n / 5);
    // get the highest previous result same or lower as n/5
    let temp = previous.filter(a => a[0] <= f).sort((a, b) => a[0] - b[0]).reverse();
    let count = temp[0][1];
    if (f == temp[0][0]) return count; // already have this case; otherwise ...
    for (let i = temp[0][0] + 1; i <= f; i++) {
        let t = 5 * i;
        while (t % 10 == 0) {
            t = t / 10;
            count += 1;
        }
        while (t % 5 == 0) {
            t = t / 5;
            count += 1;
        }
    }
    previous.push([f, count]); // having calc'd result, push it to previous
    return count;
}