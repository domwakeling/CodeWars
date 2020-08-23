// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
    // array of tills
    let tills = [];
    for (let i = 0; i < n; i++) {
        tills.push(0);
    }

    // get a copy of customers that we can mutate, and a time counter
    let c = customers.map(customer => customer);
    let time = 0;

    while (c.length > 0 || tills.reduce((tot, t) => tot + t, 0) > 0) {
        // increment time
        time += 1;
        // iterate through tills; NB: for  ... in iterates over INDEXES of an array
        for (let i in tills) {
            if (tills[i] == 0 && c.length > 0) {
                tills[i] = Math.max(c.shift() - 1, 0);
            } else {
                tills[i] = Math.max(tills[i] - 1, 0);
            }
        }
    }

    return time;
}