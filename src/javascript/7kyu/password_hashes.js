// https://www.codewars.com/kata/54207f9677730acd490000d1/

function passHash(str) {
    const crypto = require('crypto');
    const hash = crypto.createHash('md5');
    return hash.update(str).digest('hex');
}