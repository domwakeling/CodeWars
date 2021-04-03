// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(string) {
    let ret = [];
    if (string.length > 0) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] != " ") {
                ret.push(string.split("")
                    .map((x, idx) => idx == i ? x.toUpperCase() : x)
                    .join("")
                );
            }
        }
    }
    return ret;
}