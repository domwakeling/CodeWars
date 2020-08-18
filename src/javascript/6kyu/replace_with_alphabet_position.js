// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    if (text.toLowerCase().match(/[a-z]/g) == null) return ""
    return text.toLowerCase()
        .match(/[a-z]/g)
        .map(char => char.charCodeAt(0) - "a".charCodeAt(0) + 1)
        .join(" ")
}