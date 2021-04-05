// https://www.codewars.com/kata/57a153e872292d7c030009d4

function simpleTransposition(text) {
    let rows = ["", ""];
    for (let i = 0; i < text.length; i++) {
        rows[i % 2] = rows[i % 2] + text[i];
    }
    return rows.join("");
}