// https://www.codewars.com/kata/596f610441372ee0de00006e

const deNico = (key, m) => {
    // generate the decrypt order, 0-based
    const dec = key.split("").map(c => key.split("").sort().join("").indexOf(c));
    // generate an array of 'key'-length segments as arrays (may have an empty array at end, not worried)
    let s = []
    for (let i = key.length; i <= m.length + key.length; i += key.length) {
        s.push(m.substring(i - key.length, i).split(""))
    }
    // re-order letters in each row, join each row, join all rows
    let ret = s.map(row => {
        return row.map((c, idx) => row[dec[idx]]).join("")
    }).join("")
    // remove any trailing whitespace
    while (ret[ret.length - 1] == " ") {
        ret = ret.substring(0, ret.length - 1)
    }
    // and return
    return ret;
}