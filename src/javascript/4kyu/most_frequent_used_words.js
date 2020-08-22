// https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {

    let t = text.toLowerCase();      // make lowercase to avoid dealing with issues
    t = ' ' + t.replace(/\s/g, ' ') + ' ';        // strip out any 'odd' characters like linespaces and replace

    let words = [];

    for (let i = t.length; i > 0; i--) {

        // make a search regexp with lots of characters up front and optional apostrophe/letters; cyclically reduce the leading characters
        let sr = new RegExp(`([a-z]{${i}}(?:'[a-z]+){0,1})`);

        // test presence of matches to regexp and split them away until test is false
        while (sr.test(t)) {
            let word = t.match(sr)[0];
            let l = t.length;
            let r = new RegExp(word, 'g');
            t = t.replace(r, '');
            let count = (l - t.length) / word.length;
            words.push([word, count]);
        }
    }

    return words.sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(a => a[0]);

}