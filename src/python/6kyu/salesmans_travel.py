# https://www.codewars.com/kata/56af1a20509ce5b9b000001e

import re

def travel(r, zipcode):
    rList = r.split(',')
    res = [[], []]
    for address in rList:
        a = re.search('(\d+) ([A-Za-z .]+) ([A-Z]{2} \d{5})', address)
        if a and a[3] == zipcode:
            res[0].append(a[2])
            res[1].append(a[1])
    return f'{zipcode}:' + ','.join(res[0]) + '/' + ','.join(res[1])
