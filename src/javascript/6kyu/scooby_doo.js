// https://www.codewars.com/kata/58693bbfd7da144164000d05

function scoobydoo(villian, villians) {

    // get the info - all lower case with no space
    let str = villian.split("");
    let ret = str.slice(str.length - 5, str.length)
        .concat(str.slice(0, str.length - 5))
        .reverse()
        .map((x, idx) => idx % 2 ? String.fromCharCode((x.charCodeAt(0) - 97 + 5) % 26 + 97) : x)
        .join("");

    for (let name of villians) {
        if (name.toLowerCase().replace(" ", "") == ret) return name;
    }

}