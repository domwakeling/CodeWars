# https: // www.codewars.com/kata/5c765a4f29e50e391e1414d4

import re

def syllables(word):
    s = re.split('[b-df-hj-np-tv-xz]+', word.lower())
    s = list(filter(lambda x: x != '', s))
    prov = len(s)
    if len(word) > 1 and word[len(word)-1] == 'e' and word[len(word)-2] not in ['a', 'e', 'i', 'o', 'u']:
        prov -= 1
    return prov if prov > 0 else 1


def is_haiku(text):
    # split into lines and remove all non-alpha characters
    cleanLines = list(map(lambda x: re.sub(
        '[^A-Za-z ]', '', x), text.splitlines()))

    # return false if not three lines
    if len(cleanLines) != 3:
        return False

    # get syllable count
    sylls = []
    for line in cleanLines:
        words = list(filter(lambda x: x not in ['', ' '], line.split(' ')))
        print(words)
        counts = list(map(lambda x: syllables(x), words))
        sylls.append(sum(counts))

    # check if we have 5/7/5 match
    return sylls == [5, 7, 5]
