# https://www.codewars.com/kata/563fbac924106b8bf7000046

import re


def truncate(longURL):
    ignores = ["the", "of", "in", "from", "by",
               "with", "and", "or", "for", "to", "at", "a", ]
    temp = longURL.split('-')
    print(temp)
    return ''.join(map(lambda x: x[0], filter(lambda x: x.lower() not in ignores, temp)))


def generate_bc(url, separator):
    # split down into elements; get rid of http(s):// because it messes up the split!
    seps = url.replace('://', '').split('/')
    seps = filter(lambda x: x != '', seps)
    tempURL = '/'
    nums = len(seps)
    elems = []
    print(seps)
    print(nums)

    # pop last element if it starts with index
    if seps[nums-1][:5] == 'index':
        seps.pop()
        nums = nums - 1

    # deal with case where there is only one element
    if nums == 1:
        return '<span class="active">HOME</span>'

    # cycle through elements before the last one
    for idx in range(nums - 1):
        str = 'HOME'
        if idx > 0:
            tempURL = tempURL + seps[idx] + '/'
            str = (seps[idx].replace('-', ' ') if len(seps[idx])
                   < 30 else truncate(seps[idx])).upper()
        elems.append('<a href="%s">%s</a>' % (tempURL, str))

    # for last element, get rid of file format and any anchors
    str = re.search('^([A-Za-z0-9\-]+)', seps[nums - 1]).group(0).upper()
    # then deal with any dashes and truncate if necessary
    str = str.replace('-', ' ') if len(str) < 30 else truncate(str)
    elems.append('<span class="active">%s</span>' % str)

    return separator.join(elems)
