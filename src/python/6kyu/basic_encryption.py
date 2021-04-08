# https://www.codewars.com/kata/5862fb364f7ab46270000078

def encrypt(text, rule):
    return ''.join(list(map(lambda x: chr((ord(x) + rule) % 256), list(text)))
