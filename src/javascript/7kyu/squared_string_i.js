// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

function vertMirror(strng) {
    return strng.split("\n").map(x => x.split("").reverse().join("")).join("\n");
}
function horMirror(strng) {
    return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
    return fct(s);
}
