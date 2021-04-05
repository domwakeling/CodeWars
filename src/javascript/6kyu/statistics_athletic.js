// https://www.codewars.com/kata/55b3425df71c1201a800009c

function strToSeconds(str) {
    s = str.split('|');
    return 60 * 60 * parseInt(s[0]) + 60 * parseInt(s[1]) + parseInt(s[2]);
}

function secsToStr(secs) {
    let s = [];
    let newSecs = secs;
    for (let i = 0; i < 3; i++) {
        let n = Math.max(Math.floor(newSecs / Math.pow(60, 2 - i)), 0);
        newSecs = newSecs - n * Math.pow(60, 2 - i);
        s.push((n < 10 ? "0" : "") + n.toString());
    }
    return s.join('|');
}

function stat(strg) {
    // deal with empty string
    if (strg == "") return "";

    // read data in
    let data = [];
    for (let item of strg.split(", ")) {
        data.push(strToSeconds(item))
    }

    // sort data by value
    data = data.sort((a, b) => a - b);
    const l = data.length;

    // calculate requirements
    let rge = data[l - 1] - data[0];
    let av = Math.floor(data.reduce((tot, x) => tot + x, 0) / l);
    let med = l % 2 == 0 ? Math.floor((data[l / 2 - 1] + data[l / 2]) / 2) : data[(l - 1) / 2];

    return "Range: " + secsToStr(rge) + " Average: " + secsToStr(av) + " Median: " + secsToStr(med);

}