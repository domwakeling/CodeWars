// https://www.codewars.com/kata/58708934a44cfccca60000c4

function highlight(code) {
    let arr = code.match(/(F+|R+|L+|\d+|\(|\))/g);
    arr = arr.map(item => {
        let col = "orange";
        if (item[0] == "F") col = "pink";
        if (item[0] == "L") col = "red";
        if (item[0] == "R") col = "green";
        return item.match(/[()]/) ? item : `<span style="color: ${col}">${item}</span>`
    })
    return arr.join("");
}