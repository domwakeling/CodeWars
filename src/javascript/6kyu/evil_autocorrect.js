// https://www.codewars.com/kata/538ae2eb7a4ba8c99b000439

function autocorrect(input) {

    // first change any instances of 'u' to 'you' then make changes
    // punctuation is a pain, hard-coded here but could fix properly
    // on a harder kata by using regexp match and capture groups
    return input
        .split(" ")
        .map(word => word.toLowerCase() == 'u' ? 'you' : word)
        .map(word => /^you+$/.test(word.toLowerCase()) ? "your sister" : word)
        .map(word => /^you+!$/.test(word.toLowerCase()) ? "your sister!" : word)
        .join(" ")
}