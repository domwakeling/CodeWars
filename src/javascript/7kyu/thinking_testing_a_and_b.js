// https://www.codewars.com/kata/56d904db9963e9cf5000037d

function testit(a, b) {
    let r = [a, b].map(n => n.toString(2).split(""))
    const m = r.map(a => a.length).reduce((tot, a) => Math.max(tot, a), 0)
    for (let i = 0; i < 2; i++) {
        while (r[i].length < m) {
            r[i].unshift('0')
        }
    }
    let x = r[0].map((a, idx) => (a == '1' || r[1][idx] == '1') ? '1' : '0');
    return parseInt(x.join(''), 2);
}