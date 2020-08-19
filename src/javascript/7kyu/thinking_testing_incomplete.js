// https://www.codewars.com/kata/56d9292cc11bcc3629000533

function testit(s) {
    let r = s.split("").map(c => c.charCodeAt(0))
    const m = r.length;
    r = r.reduce((tot, a, idx) => {
        if (idx % 2 == 0) {
            if (idx < m - 1) {
                return tot.concat(Math.floor((a + r[idx + 1]) / 2))
            } else {
                return tot.concat(a)
            }
        } else {
            return tot
        }
    }, [])
    return r.map(n => String.fromCharCode(n)).join("")
}