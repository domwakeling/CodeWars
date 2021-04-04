// https://www.codewars.com/kata/581331293788bc1702001fa6

function mirror(text) {
    let lines = text.split(" ");
    let count = lines.reduce((m, x) => x.length > m ? x.length : m, 0);
    const t = "*".repeat(count + 4);
    let ret = [t];
    for (let line of lines) {
        ret.push("* " + line.split("").reverse().join("") + " ".repeat(count - line.length + 1) + "*");
    }
    ret.push(t);
    return ret.join("\n");
}