# https://www.codewars.com/kata/52742f58faf5485cae000b9a

import math

time_lengths = [60, 60, 24, 365]
time_units = ['year', 'day', 'hour', 'minute', 'second']

def format_duration(seconds):

    if seconds == 0:
        return 'now'
        
    t = []
    for i in range(4):
        t. append(seconds % time_lengths[i])
        seconds = int(math.floor(seconds/time_lengths[i]))
    t.append(seconds)
    
    t.reverse()
    
    for i in range(5):
        if t[i] > 0:
            t[i] = str(t[i]) + " " + time_units[i] + ("s" if t[i] > 1 else "")
    
    t = list(filter(lambda x: x != 0, t))
    
    if len(t) == 1:
        return t[0]
    else:
        return ", ".join(t[0:len(t)-1]) + " and " + t[len(t)-1]