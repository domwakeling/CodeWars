// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
    console.log(v1, v2, g)
    // guard
    if (v1 >= v2) return null
    // get time in seconds [more complicated because maths rounding was messing]
    let t = Math.floor(3600 * g / (v2 - v1))
    let ret = []
    // cycle secs/mins/hours
    for (let i = 0; i < 3; i++) {
        ret.push(t % 60)
        t = (t - ret[i]) / 60
    }
    // reverse
    return ret.reverse();
}