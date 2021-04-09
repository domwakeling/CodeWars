# https://www.codewars.com/kata/5254ca2719453dcc0b00027d

import itertools


def permutations(string):
    return set(list(map(lambda x: ''.join(x), list(itertools.permutations(string, len(string))))))
