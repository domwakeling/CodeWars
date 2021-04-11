# https://www.codewars.com/kata/59de1e2fe50813a046000124

import re

def change(s, prog, version):
    print(s)
    pNum = re.search('\+1-\d{3}-\d{3}-\d{4}', s)
    vNum = re.search('Version: (\d+\.\d+)\\n', s)
    if not pNum or not vNum:
        return 'ERROR: VERSION or PHONE'
    v = '2.0' if vNum[1] == '2.0' else version
    return f'Program: {prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: {v}'
