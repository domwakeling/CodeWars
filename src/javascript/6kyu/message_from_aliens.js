// https://www.codewars.com/kata/598980a41e55117d93000015

function decode(m) {
    // translation dictionary & array of keys
    const dict = {
        '/\\': "a", ']3': "b", '(': "c", '|)': "d", '[-': "e",
        '/=': "f", '(_,': "g", '|-|': "h", '|': "i", '_T': "j",
        '/<': "k", '|_': "l", '|\\/|': "m", '|\\|': "n", '()': "o",
        '|^': "p", '()_': "q", '/?': "r", '_\\~': "s", '~|~': "t",
        '|_|': "u", '\\/': "v", '\\/\\/': "w", '><': "x", '`/': "y",
        '~/_': "z", "__": " "
    }
    const keys = Object.keys(dict)

    // filter out the first character, appears to be a fake
    return m.split(m[0])
        .filter(a => a != '')
        .reverse()
        .map(k => keys.indexOf(k) >= 0 ? dict[k] : k)
        .join("")
}