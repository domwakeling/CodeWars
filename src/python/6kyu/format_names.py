# https://www.codewars.com/kata/53368a47e38700bd8300030d

def namelist(names):
    count = len(names)
    if count == 0:
        return ''
    elif count == 1:
        return names[0]['name']
    else:
        return ", ".join(list(map(lambda x: x['name'], names[0:count-1]))) + " & " + names[count - 1]['name']
