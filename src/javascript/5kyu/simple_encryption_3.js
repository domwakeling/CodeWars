// https://www.codewars.com/kata/57d0329442e44e65e8000bb5

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '.'];

const toBits = (l) => {
    let r = alphabet.indexOf(l).toString(2);
    while (r.length < 6) { r = `0${r}` } // use string literal to avoid coercion problems
    return r;
}

const fromBits = (b) => {
    return alphabet[parseInt(b, 2)];
}

const arrayReverse = (arr) => {
    let temp = [];
    for (let i = arr.length - 1; i >= 0; i--) temp.push(arr[i])
    return temp;
}

function encrypt(text) {
    // deal with the simple case
    if (text == null || text == '') return text;

    // test for excluded letters
    if (!/^[A-Za-z0-9 .]+$/g.test(text)) throw Error;

    // convert to bits
    let t = text
        .split('')
        .map(l => toBits(l).split(''));

    // define a temp once ...
    let temp = '';

    // step 1 - 5th <=> 1st of next
    for ([idx, b] of t.entries()) {
        if (idx < t.length - 1) {
            temp = t[idx + 1][0];
            t[idx + 1][0] = b[4];
            b[4] = temp;
        }
    }

    // step 2 - invert 2nd & 4th characters
    for (let b of t) {
        b[1] = b[1] == '0' ? '1' : '0';
        b[3] = b[3] == '0' ? '1' : '0';
    }

    // step 3 - switch first three and back 3
    for ([idx, b] of t.entries()) {
        t[idx] = (b.join('').slice(3) + b.join('').slice(0, 3)).split('')
    }

    // step 4 - switch 1<=>2, 3<=>4, 5<=>6
    for (let b of t) {
        for (let i = 0; i < 3; i++) {
            temp = b[2 * i];
            b[2 * i] = b[2 * i + 1];
            b[2 * i + 1] = temp;
        }
    }

    // step 5 - reverse the bits
    for ([idx, b] of t.entries()) {
        t[idx] = arrayReverse(b);
    }

    // step 6 - change 1<=>3
    for (let b of t) {
        temp = b[0];
        b[0] = b[2];
        b[2] = temp;
    }

    return t.map(x => x.join(''))
        .map(b => fromBits(b))
        .join('');
}

function decrypt(encryptedText) {
    // deal with the simple case
    if (encryptedText == null || encryptedText == '') return encryptedText;

    // test for excluded letters
    if (!/^[A-Za-z0-9 .]+$/g.test(encryptedText)) throw Error;

    // convert to bits
    let t = encryptedText
        .split('')
        .map(l => toBits(l).split(''));

    // define a temp once ...
    let temp = '';

    // undo step 6 - change 1<=>3
    for (let b of t) {
        temp = b[0];
        b[0] = b[2];
        b[2] = temp;
    }

    // undo step 5 - reverse the bits
    for ([idx, b] of t.entries()) {
        t[idx] = arrayReverse(b);
    }

    // undo step 4 - switch 1<=>2, 3<=>4, 5<=>6
    for (let b of t) {
        for (let i = 0; i < 3; i++) {
            temp = b[2 * i];
            b[2 * i] = b[2 * i + 1];
            b[2 * i + 1] = temp;
        }
    }

    // undo step 3 - switch first three and back 3
    for ([idx, b] of t.entries()) {
        t[idx] = (b.join('').slice(3) + b.join('').slice(0, 3)).split('')
    }

    // undo step 2 - invert 2nd & 4th characters
    for (let b of t) {
        b[1] = b[1] == '0' ? '1' : '0';
        b[3] = b[3] == '0' ? '1' : '0';
    }

    // undo step 1 - 5th <=> 1st of next
    for ([idx, b] of t.entries()) {
        if (idx < t.length - 1) {
            temp = t[idx + 1][0];
            t[idx + 1][0] = b[4];
            b[4] = temp;
        }
    }

    return t.map(x => x.join(''))
        .map(b => fromBits(b))
        .join('');
}