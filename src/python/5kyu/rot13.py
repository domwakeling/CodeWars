# https://www.codewars.com/kata/530e15517bc88ac656000716

import string
import operator
from codecs import encode as _dont_use_this_


def rotateChar(c):
    lower = list(string.ascii_lowercase)
    upper = list(string.ascii_uppercase)
    if c in lower:
        return lower[(operator.indexOf(lower, c) + 13) % 26]
    elif c in upper:
        return upper[(operator.indexOf(upper, c) + 13) % 26]
    else:
        return c


def rot13(message):
    return ''.join(list(map(lambda x: rotateChar(x), list(message))))
