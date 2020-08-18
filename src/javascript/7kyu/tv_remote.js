//https://www.codewars.com/kata/5a5032f4fd56cb958e00007a

var tvRemote = function (word) {

    const keyboard = [
        ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
        ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
        ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
        ['p', 'q', 'r', 's', 't', '.', '@', '0'],
        ['u', 'v', 'w', 'x', 'y', 'z', '_', '/']
    ]

    let pos = [0, 0]
    return word.split('').reduce((tot, l) => {
        for (let r = 0; r < keyboard.length; r++) {
            for (let c = 0; c < keyboard[0].length; c++) {
                if (keyboard[r][c] == l) {
                    const presses = Math.abs(pos[0] - r) + Math.abs(pos[1] - c) + 1
                    pos = [r, c]
                    return tot + presses;
                }
            }
        }
    }, 0);
}