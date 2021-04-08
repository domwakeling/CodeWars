import re
https: // www.codewars.com/kata/5735b2b413c205fe39000c68


def shorten(ip):
    # split and change 0000 to 0
    ip2 = re.sub('0{4}', '0', ip).split(':')

    # remove leading zeros
    for idx, item in enumerate(ip2):
        while item[0] == '0' and len(item) > 1:
            item = item[1:]
        ip2[idx] = item

    # deal with multiple zeros
    longestStart = -1
    longestLength = 0
    currentStart = -1
    currentLength = 0
    for idx in range(len(ip2)):
        if ip2[idx] == '0':
            if currentStart == -1:
                currentStart = idx
                currentLength = 1
            else:
                currentLength += 1
        else:
            if currentStart >= 0 and currentLength > longestLength:
                longestStart = currentStart
                longestLength = currentLength
            currentLength = 0
            currentStart = -1

    if currentStart >= 0 and currentLength > longestLength:
        longestStart = currentStart
        longestLength = currentLength

    if longestStart >= 0:
        ip2 = ip2[:longestStart] + [''] + ip2[longestStart+longestLength:]
    if longestStart == 0:
        ip2 = [''] + ip2
    if longestStart + longestLength >= 8:
        ip2 = ip2 + ['']

    return ':'.join(ip2)
