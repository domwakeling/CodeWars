// https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1, array2) {

    return array1.filter(letters => {
        for (let word of array2) {
            if (word.indexOf(letters) >= 0) return true;
        }
        return false;
    })
        .sort((a, b) => a > b);
}