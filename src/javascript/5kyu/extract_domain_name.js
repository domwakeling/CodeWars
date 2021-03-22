// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    let m = url.match(/^(?:https?:\/\/)?(?:www\.)?([\w-]*)/)
    return m[1]
}