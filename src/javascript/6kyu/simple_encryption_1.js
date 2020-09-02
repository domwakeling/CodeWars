// https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encrypt(text, n) {
    // simple case - n is less than 1
    if (n < 1) return text;
    // empty and null cases
    if (text == null || text == '') return text;
    let t = text;
    for (let i = 0; i < n; i++) {
        t = t.split('').filter((_, i) => i % 2 == 1).join('') + t.split('').filter((_, i) => i % 2 == 0).join('');
    }
    return t;
}

function decrypt(encryptedText, n) {
    // simple case - n is less than 1
    if (n < 1) return encryptedText;
    // empty and null cases
    if (encryptedText == null || encryptedText == '') return encryptedText;
    const lf = encryptedText.length;
    const lh = Math.floor(lf / 2);
    let t = encryptedText;
    for (let i = 0; i < n; i++) {
        // split the text in two - if odd number, second half should be longer
        let temp = [t.slice(0, lh), t.slice(lh)];
        t = "";
        for (let j = 0; j < lh; j++) {
            t = t + temp[1][j] + temp[0][j];
        }
        if (temp[1].length > lh) t = t + temp[1][lh]
    }
    return t;
}