// https://www.codewars.com/kata/559a28007caad2ac4e000083

let fibs = [1, 1, 2];
// need this t aid with larger tests because of recursive nature of fib()

function perimeter(n) {

    const fib = (n) => {
        if (n < fibs.length) return fibs[n];
        let newFib = fib(n - 1) + fib(n - 2);
        fibs[n] = newFib
        return newFib
    }

    return fib(n + 2) * 4 - 4;
}