// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n) {
    if (n < 0 || n % 2 == 0) return null;
    let ret = "";
    let cen = (n - 1) / 2;
    for (let r = 0; r < n; r++) {
        let spaces = Math.abs(r - cen)
        let stars = n - 2 * spaces
        ret = ret + " ".repeat(spaces) + "*".repeat(stars) + "\n"
    }
    return ret;
}