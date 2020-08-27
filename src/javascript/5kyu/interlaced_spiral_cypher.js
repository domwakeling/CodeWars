// https://www.codewars.com/kata/5a24a35a837545ab04001614

const InterlacedSpiralCipher = {};

InterlacedSpiralCipher.matrixForSize = function (n) {
    // get size of matrix
    const size = Math.ceil(Math.sqrt(n));
    // get a matrix 'size x size' populated with -1's
    let m = [];
    for (let i = 0; i < size; i++) {
        let temp = [];
        for (let j = 0; j < size; j++) temp.push(-1);
        m.push(temp)
    }
    // offset is how many rows/columns to move in by
    // length is the length/size of the current inner cube
    // nextSize is the trigger for moving into next cube
    // c is the next value to be pasted
    let offset = 0;
    let length = size;
    let nextSize = 4 * (size - 1);
    let c = 0;
    // loop until c equals size^2 (which means we're over the limit)
    while (c < size * size) {
        // if we're at the next step, move everything in
        if (c >= nextSize) {
            length = length - 2;
            offset = offset + 1;
            nextSize = nextSize + (length > 1 ? 4 * (length - 1) : 1);
        }
        // if length is 1, we have odd side length and have hit the middle ...
        if (length == 1) {
            m[offset][offset] = c;
            c++;
        } else {
            for (let i = 0; i < length - 1; i++) {
                m[offset][offset + i] = c;
                m[offset + i][size - offset - 1] = c + 1;
                m[size - offset - 1][size - offset - i - 1] = c + 2;
                m[size - offset - i - 1][offset] = c + 3
                c += 4;
            }
        }
    }
    return m;
}

InterlacedSpiralCipher.encode = function (str) {
    let m = this.matrixForSize(str.length);
    m = m.map(row => row.map(n => n < str.length ? str[n] : ' ').join('')).join('');
    return m;

};

InterlacedSpiralCipher.decode = function (str) {
    let m = this.matrixForSize(str.length);
    m = m.reduce((tot, row) => tot.concat(row), [])
        .map((n, idx) => [n, idx < str.length ? str[idx] : ''])
        .sort((a, b) => a[0] - b[0])
        .map(n => n[1])
        .join('');
    return m.slice(0, m.match(/(\s*)$/).index);
};