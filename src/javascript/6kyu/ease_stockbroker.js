// https://www.codewars.com/kata/54de3257f565801d96001200

function balanceStatements(list) {

    // deal with trivial case of empty string (here to avoid array-handling errors)
    if (list == "") return "Buy: 0 Sell: 0"

    // get list into an array and set up vars
    let arr = list.split(",");
    let buy = 0;
    let sell = 0;
    let errs = [];

    // parse array strings; if not a match remove leading and trailing spaces and add to errs
    for (let i = 0; i < arr.length; i++) {
        let st = arr[i].match(/^ ?([A-Z0-9\.]+) (\d+) (\d*\.\d+) ([BS])/);
        if (st) {
            if (st[4] == "B") {
                buy = buy + st[2] * st[3];
            } else {
                sell = sell + st[2] * st[3];
            }
        } else {
            errs.push(arr[i].match(/^ ?([\D\d]+) ?$/)[1]);
        }
    }

    // set up the return
    let ret = "Buy: " + Math.round(buy) + " Sell: " + Math.round(sell);
    if (errs.length > 0) ret = ret + "; Badly formed " + errs.length + ": " + errs.join(" ;") + " ;";
    return ret;

}