// https://www.codewars.com/kata/586a1af1c66d18ad81000134

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function driver(data) {
    // surname
    let ret = data[2].toUpperCase().split("").slice(0, 5);
    while (ret.length < 5) {
        ret.push("9");
    }
    // get date
    let d = data[3].split("-");
    // add decade
    ret.push(d[2][2]);
    // add month
    let m = months.indexOf(d[1].split(0, 3)[0]) + (data[4] == "M" ? 1 : 51);
    ret.push(m > 9 ? m : `0${m}`);
    // add day
    ret.push(d[0]);
    // add year
    ret.push(d[2][3]);
    // add initials
    ret.push(data[0][0]);
    ret.push(data[1] != '' ? data[1][0] : '9');
    // finish up
    ret.push("9AA");
    return ret.join("");
}