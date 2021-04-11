# https://www.codewars.com/kata/5544c7a5cb454edb3c000047

def bouncingBall(h, bounce, window):
    if h <= 0 or not 0 < bounce < 1 or window >= h:
        return -1
    count = -1
    while h > window:
        count += 2
        h = h * bounce
    return count
