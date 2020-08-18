// https://www.codewars.com/kata/5b277e94b6989dd1d9000009

var tvRemote = function (words) {
  
    const keyboard = [
        ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
        ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
        ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
        ['p', 'q', 'r', 's', 't', '.', '@', '0'],
        ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
        ['aa', " ", '', '', '', '', '', '']
    ]
    
    const isUpperCase = (letter) => {
      return /[A-Z]/.test(letter)
    }
    
    const isLowerCase = (letter) => {
      return /[a-z]/.test(letter)
    }
    
    const counts = (letter) => {
      for (let r = 0; r < keyboard.length; r++) {
            for (let c = 0; c < keyboard[0].length; c++) {
                if (keyboard[r][c] == letter.toLowerCase()) {
                    const presses = Math.abs(pos[0] - r) + Math.abs(pos[1] - c) + 1
                    pos = [r, c]
                    return presses;
                }
            }
        }
    }

    let pos = [0, 0]
    
    let ucase = false
    
    return words.split('').reduce((tot, l) => {
      if ((!ucase && isUpperCase(l)) || (ucase && isLowerCase(l))) {
        ucase = !ucase
        return tot + counts("aA") + counts(l)
      } else {
        return tot + counts(l)
        }
    }, 0);
}