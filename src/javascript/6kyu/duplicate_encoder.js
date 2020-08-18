// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
    let tempArray = word.toLowerCase().split("")
    return word.toLowerCase()
        .split("")
        .map(char => tempArray.filter(a => a == char).length > 1 ? ")" : "(")
        .join("")
}