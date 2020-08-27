// https://www.codewars.com/kata/5523b97ac8f5025c45000900

Plugboard = function (wires) {
    // check that 'wires' only includes capital letters
    if (!/^[A-Z]*$/.test(wires)) throw (Error);

    // check that length of 'wires' is even
    if (wires.length % 2 !== 0) throw (Error);

    // check that length of 'wires' is no more than 20
    if (wires.length > 20) throw (Error);

    // check that no letter is repeated in 'wires'
    if (Array.from(new Set(wires.split(''))).length !== wires.length) throw (Error);

    this.process = function (wire) {
        const i = wires.indexOf(wire);
        return i < 0 ? wire : wires[i % 2 == 0 ? i + 1 : i - 1];
    }
}