# https://www.codewars.com/kata/59e19a747905df23cb000024

def string_letter_count(s):
    # get a list of all the alpha characters (don't bother sorting)
    t = [char for char in s.lower() if char.isalpha()]
    # get a. set of those characters, sorted
    u = list(set(t))
    u.sort()
    # build a string with count/char pairs
    r = ""
    for char in u:
        r = r + str(t.count(char)) + char
    return r