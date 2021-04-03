// https://www.codewars.com/kata/56dbe7f113c2f63570000b86

function rot(strng) {
    return strng.split("\n")
        .map(x => x.split("").reverse().join(""))
        .reverse()
        .join("\n");
}
function selfieAndRot(strng) {
    let arr = strng.split("\n");
    const l = arr.length;
    return arr.map(x => x + ".".repeat(l))
        .concat(rot(strng).split("\n").map(x => ".".repeat(l) + x))
        .join("\n");
}
function oper(fct, s) {
    return fct(s);
}
