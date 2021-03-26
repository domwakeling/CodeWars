// https://www.codewars.com/kata/54d558c72a5e542c0600060f

// Diffuse all of the Bombs!
// console.log('Bomb 1');
// console.log(Bomb)
Bomb.diffuse(42);

// console.log("\n======\nBomb 2");
// console.log(Bomb)
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();

// console.log("\n======\nBomb 3");
// console.log(Bomb)
// console.log("When checking global you find global.BombKey:", global.BombKey)
Bomb.diffuse(global.BombKey);

// console.log("\n======\nBomb 4");
// console.log(Bomb)
// console.log(Bomb.diffuse.toString())
function diffuseTheBomb() { return true }
Bomb.diffuse();

// console.log("\n======\nBomb 5");
// console.log(Bomb)
// console.log(Bomb.diffuse.toString())
Bomb.diffuse(3.14159);

// console.log("\n======\nBomb 6");
// console.log(Bomb.diffuse.toString())
var date = new Date();
date.setFullYear(date.getFullYear() - 4);
Bomb.diffuse(date);

// console.log("\n======\nBomb 7");
// console.log(Bomb)
// console.log(Bomb.diffuse.toString())
var freezeCode = {
    key: 43
}
Object.freeze(freezeCode);
Bomb.diffuse(freezeCode);

// console.log("\n======\nBomb 8");
// console.log(Bomb)
// console.log(Bomb.diffuse.toString())
obj = (function () {
    currentValue = 7;
    return {
        valueOf: function () { return currentValue = currentValue + 2 }
    }
})()
Bomb.diffuse(obj);

// console.log("\n======\nBomb 9");
// console.log(Bomb)
// console.log(Bomb.diffuse.toString())
var myCount = 0;
Math.random = function () {
    myCount++
    return myCount == 3 ? 0.5 : 1;
}
Bomb.diffuse(42);

// console.log("\n======\nBomb 10");
// console.log(Bomb.diffuse.toString())
let code = 'eWVz'; // 'yes' encoded Base64
// change the valueOf() method of the Array prototype so that adding the three arrays together sums to 42 - which means just reduce them!
Array.prototype.valueOf = function () { return this.reduce((tot, n) => tot + n, 0) }
Bomb.diffuse(code)

// as an aside, that's taken what feels like three years to work out ...
