// https://www.codewars.com/kata/56c04261c3fcf33f2d000534

function doubles(maxk, maxn) {
    let sum = 0;
    for (let k = 1; k <= maxk; k++) {
        for (let n = 1; n <= maxn; n++) {
            sum = sum + 1.0 / (1.0 * k * Math.pow(n + 1, 2 * k))
        }
    }
    return sum
}