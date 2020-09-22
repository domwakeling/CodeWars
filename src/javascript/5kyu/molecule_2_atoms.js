// https://www.codewars.com/kata/52f831fa9d332c6591000511

// returns a dictionary of elements and number of molecules - string must have been extended previously
// and any single molecules must already have been expressed - so H2O would now be H201
function summariseCompound(comp) {

    var dict = {};
    var parsingElement = true;
    var elem = "";
    var count = 0;

    for (i = 0; i < comp.length; i++) {
        if (/\d/.test(comp[i])) {
            parsingElement = false;
            count = 10 * count + parseInt(comp[i]);
        }
        if ((!parsingElement && !(/\d/.test(comp[i]))) || i == comp.length - 1) {
            if (elem in dict) {
                dict[elem] += count;
            } else {
                dict[elem] = count;
            }
            elem = "";
            count = 0;
            parsingElement = true;
        }
        if (parsingElement && !(/\d/.test(comp[i]))) elem += comp[i];
    }
    console.log(dict);
    return dict;
}

function parseMolecule(formula) {

    // let's try doing this with regular expressions

    // define a variable to store matches in
    m = null;

    // cycle while there's a closing numbered bracket in the formula
    while (/[\])}]\d/.test(formula)) {

        // if there's a pair of () deal with them
        m = formula.match(/\(((?:[A-Z][a-z]*\d*)*)\)(\d+)/);
        if (m) {
            formula = formula.substring(0, m.index) + m[1].repeat(parseInt(m[2])) + formula.substring(m.index + m[1].length + m[2].length + 2);
        }

        // if there's a pair of [] deal with them
        m = formula.match(/\[((?:[A-Z][a-z]*\d*)*)\](\d+)/);
        if (m) {
            formula = formula.substring(0, m.index) + m[1].repeat(parseInt(m[2])) + formula.substring(m.index + m[1].length + m[2].length + 2);
        }

        // if there's a pair of {} deal with them
        m = formula.match(/\{((?:[A-Z][a-z]*\d*)*)\}(\d+)/);
        if (m) {
            formula = formula.substring(0, m.index) + m[1].repeat(parseInt(m[2])) + formula.substring(m.index + m[1].length + m[2].length + 2);
        }
    }

    // we should now have a string with no 'numbered' brackets; deal with any rogue un-numbered brackets
    formula = formula.split('').filter(l => /[\[\]\(\)\{\}]/.test(l) == false).join('');

    // now add digits for single elements
    while (/([A-Z][a-z]*)[A-Z]/.test(formula)) {
        m = formula.match(/([A-Z][a-z]*)[A-Z]/);
        formula = formula.substring(0, m.index) + m[1] + '1' + formula.substring(m.index + m[1].length);
    }

    // check that the last element is numbered
    if (/[A-z]$/.test(formula)) formula = formula + '1';

    // split into compounds
    let t = summariseCompound(formula)

    return t;
}