// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
    let s = str.toLowerCase()
        .split(' ')
        .filter(w => w.length > 0)
        .map(w => w.slice(0, 1).toUpperCase() + w.slice(1))
        .join('');
    if (s.length > 139 || s.length == 0) return false;
    return '#' + s;
}