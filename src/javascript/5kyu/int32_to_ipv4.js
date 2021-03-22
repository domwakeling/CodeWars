// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

function int32ToIp(int32) {
    ret = []
    for (let i = 0; i < 4; i++) {
        let n = int32 % 256;
        ret.push(n)
        int32 = (int32 - n) / 256
    }
    return ret.reverse().join(".")
}