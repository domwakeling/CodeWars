// https://www.codewars.com/kata/57f46250bd7b5434b7000ab8

function splitStringIntoPairs(str) {
    return str.split("").map((x, idx) => idx % 2 == 0 ? parseInt(str[idx]) * 10 + parseInt(str[idx + 1]) : '').filter(x => x != '');
}

function NSApuzzle(cipherText, key) {
    return splitStringIntoPairs(
        cipherText
            .split("")
            .map((x, idx) => {
                let a = parseInt(x);
                let b = parseInt(key[idx]);
                return (a + (a < b) * 10 - b).toString();
            })
            .join("")
    ).map(t => String.fromCharCode(t + (t > 0 && t <= 26 ? 96 : 18)))
        .join("");
}
