# https://www.codewars.com/kata/5353212e5ee40d4694001114

def exchange_with(a, b):
    
    temp1 = []
    for n in range(len(a)):
        temp1.append(a[len(a) - 1 - n])
    
    temp2 = []
    for n in range(len(b)):
        temp2.append(b[len(b) - 1 - n])
    
    a[:] = list(temp2)
    b[:] = list(temp1)
    
    return