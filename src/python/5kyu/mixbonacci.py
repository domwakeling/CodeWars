# https://www.codewars.com/kata/5811aef3acdf4dab5e000251

class Sequence:
    def __init__(self, starter, lambda_function):
        self.items = starter
        self.function = lambda_function
        self.next = 0
    
    def getValue(self):
        while len(self.items) < (self.next + 1):
            self.items.append(self.function(self.items))
        self.next += 1
        return self.items[self.next - 1]

def mixbonacci(pattern, length):    
    dict = {
        'fib' : Sequence([0, 1], lambda s: s[len(s) - 1] + s[len(s) - 2]),
        'pad' : Sequence([1, 0, 0], lambda s: s[len(s) - 2] + s[len(s) - 3]),
        'jac' : Sequence([0, 1], lambda s: s[len(s) - 1] + s[len(s) - 2] * 2),
        'pel' : Sequence([0, 1], lambda s: s[len(s) - 1] * 2 + s[len(s) - 2]),
        'tri' : Sequence([0, 0, 1], lambda s: s[len(s) - 1] + s[len(s) - 2] + s[len(s) - 3]),
        'tet' : Sequence([0, 0, 0, 1], lambda s: s[len(s) - 1] + s[len(s) - 2] + s[len(s) - 3] + s[len(s) - 4])
    }
    
    if len(pattern) == 0 or length == 0:
        return []
    
    ret = []
    for i in range(length):
        ret.append(dict[pattern[i % len(pattern)]].getValue())
    return ret