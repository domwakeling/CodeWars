// https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f

function balance(book) {
    let transactions = book.split("\n")
        .filter(x => x != "")
        .map(x => x.match(/[\w. ]/g).join(""));
    let bal = parseFloat(transactions[0]);
    let exp = 0;
    let count = 0;
    let ret = `Original Balance: ${bal.toFixed(2)}`;
    for (let i = 1; i < transactions.length; i++) {
        let temp = transactions[i].split(" ");
        temp[2] = parseFloat(temp[2]).toFixed(2);
        bal = (bal - parseFloat(temp[2]));
        exp = (exp + parseFloat(temp[2]));
        count += 1;
        ret = ret + `\r\n${temp.join(" ")} Balance ${bal.toFixed(2)}`;
    }
    let av = (exp / count).toFixed(2);
    ret = ret + `\r\nTotal expense  ${exp.toFixed(2)}\r\nAverage expense  ${av}`;
    return ret;
}