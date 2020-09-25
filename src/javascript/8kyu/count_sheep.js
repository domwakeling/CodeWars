// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num) {
    return num > 1 ? countSheep(num - 1) + num + ' sheep...' : '1 sheep...'
}