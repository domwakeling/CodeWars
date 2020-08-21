# https://www.codewars.com/kata/541c8630095125aba6000c00

def digital_root(n):
    temp = n
    while(temp > 9):
      temp = sum([int(x) for x in str(temp)])
    return temp