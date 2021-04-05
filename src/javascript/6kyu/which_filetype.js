// https://www.codewars.com/kata/5c7254fcaccda64d01907710

function solve(files) {
    // convert files to extensions using regexp
    let exts = files.map(file => file.match(/\.[A-Za-z0-9]+$/)[0]);

    // make a dictionary containing key-value pairs of extension and frequency
    let found = {};
    for (let i = 0; i < exts.length; i++) {
        if (exts[i] in found) {
            found[exts[i]] = found[exts[i]] + 1;
        } else {
            found[exts[i]] = 1;
        }
    }

    // find the maxmimum frequency
    let maxFound = 0;
    for (let key in found) {
        if (found[key] > maxFound) maxFound = found[key];
    }

    // make an array of extensions that match the max frequency, and return it in sorted order
    retArr = [];
    for (let key in found) {
        if (found[key] == maxFound) retArr.push(key);
    }
    return retArr.sort();
}