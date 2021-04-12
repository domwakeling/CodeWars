# https://www.codewars.com/kata/5264d2b162488dc400000001

def spin_words(sentence):
    return ' '.join(list(map(lambda x: x if len(x) < 5 else x[::-1], sentence.split(' '))))
