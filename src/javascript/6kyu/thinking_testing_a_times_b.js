// https://www.codewars.com/kata/5a90c9ecb171012b47000077

function testIt(a, b) {
    return [a, b].map(n => n.toString().split("").map(c => parseInt(c)).reduce((tot, c) => tot + c, 0))
        .reduce((tot, c) => tot * c, 1);
}