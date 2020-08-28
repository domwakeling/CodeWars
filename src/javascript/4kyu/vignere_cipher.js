// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3

function VigenèreCipher(key, abc) {

    const abcSpl = abc.split('');
    const keyMap = key.split('').map(l => abcSpl.indexOf(l));

    // pass letter l, posn p, bool add (false = substract / decode)
    const moveChar = (t, p, add) => {
        let temp = abcSpl.indexOf(t);
        if (temp < 0) return t
        temp = add ? temp + keyMap[p % keyMap.length] : temp - keyMap[p % keyMap.length];
        temp = (temp + abcSpl.length) % abcSpl.length;
        return abcSpl[temp];
    }

    this.encode = function (str) {
        return str.split('').map((l, idx) => moveChar(l, idx, true)).join('');
    };
    this.decode = function (str) {
        return str.split('').map((l, idx) => moveChar(l, idx, false)).join('');
    };
}