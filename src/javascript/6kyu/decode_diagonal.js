// https://www.codewars.com/kata/55af0d33f9b829d0a800008d

function getDiagonalCode(grid) {
    // check the empty case
    if (grid == '') return ''
    // split rows
    let rows = grid.split("\n")
    // if only one row, return one character
    if (rows.length == 1) return rows[0][0]
    // set up
    let l = rows.length - 1
    let r = 0
    let c = 0
    let d = 1
    let finished = false
    let m = ""
    // loop
    while (!finished) {
        m = m + rows[r][c]
        c = c + 2
        if (d == 1 && r == l) {
            d = -1
        } else if (d == -1 && r == 0) {
            d = 1
        }
        r = r + d
        if (rows[r].length < c + 1) finished = true
    }
    return m;
}