// https://www.codewars.com/kata/5672f4e3404d0609ec00000a

const frame = (text, char) => {
    const s = text.reduce((m, x) => x.length > m ? x.length : m, 0);
    let t = char.repeat(s + 4);
    let r = [t, ...text.map(x => char + " " + x + " ".repeat(s + 1 - x.length) + char), t];
    return r.join('\n');
};