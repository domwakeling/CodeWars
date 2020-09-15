// https://www.codewars.com/kata/5a3267b2ee1aaead3d000037

var check1800 = function (str) {

    console.log(str)

    const equiv = {
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z']
    }

    // get the last 7 digits of the phone number
    let digits = str
        .split('-')
        .filter((_, idx) => idx >= 2)
        .join('')
        .split('')
        .map(l => {
            return parseInt(Object.keys(equiv).filter(k => equiv[k].indexOf(l) >= 0)[0]);
        });

    let ret = [];

    // match patterns XXXX-XXX
    let validFoursFirst = Preloaded.WORDS.filter(w => {
        if (w.length < 4) return false;
        const wSplit = w.split('');
        for (let i = 0; i < 4; i++) {
            if (equiv[digits[i]].indexOf(wSplit[i]) < 0) return false;
        }
        return true;
    });

    let validThreesSecond = Preloaded.WORDS.filter(w => {
        if (w.length > 3) return false;
        const wSplit = w.split('');
        for (let i = 0; i < 3; i++) {
            if (equiv[digits[i + 4]].indexOf(wSplit[i]) < 0) return false;
        }
        return true;
    });

    for (let i = 0; i < validFoursFirst.length; i++) {
        for (let j = 0; j < validThreesSecond.length; j++) {
            ret.push(`1-800-${validFoursFirst[i]}-${validThreesSecond[j]}`)
        }
    }

    // match patterns XXX-XXXX

    let validThreesFirst = Preloaded.WORDS.filter(w => {
        if (w.length > 3) return false;
        const wSplit = w.split('');
        for (let i = 0; i < 3; i++) {
            if (equiv[digits[i]].indexOf(wSplit[i]) < 0) return false;
        }
        return true;
    });

    let validFoursSecond = Preloaded.WORDS.filter(w => {
        if (w.length < 4) return false;
        const wSplit = w.split('');
        for (let i = 0; i < 4; i++) {
            if (equiv[digits[i + 3]].indexOf(wSplit[i]) < 0) return false;
        }
        return true;
    });

    for (let i = 0; i < validThreesFirst.length; i++) {
        for (let j = 0; j < validFoursSecond.length; j++) {
            ret.push(`1-800-${validThreesFirst[i]}-${validFoursSecond[j]}`)
        }
    }

    return ret;
}