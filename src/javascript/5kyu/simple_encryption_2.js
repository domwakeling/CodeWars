// https://www.codewars.com/kata/5782b5ad202c0ef42f0012cb

const region = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ',', ':',
    ';', '-', '?', '!', " ", "'", '(', ')', '$', '%', '&', '"']

function encrypt(text) {
    // null or empty string, return untouched
    if (text == null || text == '') return text;
    // check for invalid characters
    if (!/^[A-Za-z0-9.,:;\-?! '()$%&"]+$/g.test(text)) throw new Error();
    // test for string-length of 1
    if (text.length == 1) {
        return region[76 - region.indexOf(text.split('')[0])];
    }
    // get an array of split string for first pass
    let t1 = text.split('');
    // switch case of every second character
    for ([idx, l] of t1.entries()) {
        if (idx % 2 == 1) {
            if (/[A-Z]/.test(l)) {
                t1[idx] = l.toLowerCase()
            } else if (/[a-z]/.test(l)) {
                t1[idx] = l.toUpperCase();
            }
        }
    }
    // get a copy for second pass, since we'll need to be able to use these values ...
    let t2 = t1.map(l => l);
    // do index-difference for 2nd character and onwards
    for (let i = 0; i < text.length - 1; i++) {

        t2[i + 1] = region[(region.indexOf(t1[i]) - region.indexOf(t1[i + 1]) + 77) % 77];
    }
    // switch first character
    t2[0] = region[76 - region.indexOf(t2[0])];
    return t2.join('');
}

function decrypt(encryptedText) {
    // null or empty string, return untouched
    if (encryptedText == null || encryptedText == '') return encryptedText;
    // check for invalid characters
    if (!/^[A-Za-z0-9.,:;\-?! '()$%&"]+$/g.test(encryptedText)) throw new Error();
    // test for string-length of 1
    if (encryptedText.length == 1) {
        return region[76 - region.indexOf(encryptedText.split('')[0])];
    }
    // get a split string
    t2 = encryptedText.split('');
    // put first character back ...
    t2[0] = region[76 - region.indexOf(t2[0])];
    // get a shallow copy
    let t1 = t2.map(l => l);
    for (let i = 0; i < t1.length - 1; i++) {
        t1[i + 1] = region[(region.indexOf(t1[i]) - region.indexOf(t2[i + 1]) + 77) % 77]
    }
    // undo the case shift
    for ([idx, l] of t1.entries()) {
        if (idx % 2 == 1) {
            if (/[A-Z]/.test(l)) {
                t1[idx] = l.toLowerCase()
            } else if (/[a-z]/.test(l)) {
                t1[idx] = l.toUpperCase();
            }
        }
    }
    return t1.join('');
}