# https://www.codewars.com/kata/56baeae7022c16dd7400086e

import re


def phone(strng, num):
    possibles = list(filter(lambda x: re.search(num, x), strng.splitlines()))
    ret = []
    if len(possibles) == 0:
        return f'Error => Not found: {num}'
    if len(possibles) > 1:
        return f'Error => Too many people: {num}'
    for item in possibles:
        name = re.search('\<([A-Za-z \']+)\>', item)[1]
        item = item.replace(f'<{name}>', '').replace(num, '').split()
        item = list(map(lambda x: x.replace('/', ''), item))
        item = list(filter(lambda x: not re.match('[^\w\d]+', x), item))
        item = list(map(lambda x: re.sub('[;,]', '', x), item))
        item = list(map(lambda x: re.sub('_', ' ', x).strip(), item))
    return f'Phone => {num}, Name => {name}, Address => {" ".join(item)}'
