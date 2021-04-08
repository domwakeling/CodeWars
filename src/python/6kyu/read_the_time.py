# https://www.codewars.com/kata/5c2b4182ac111c05cf388858

hours = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
         'eight', 'nine', 'ten', 'eleven', 'twelve']

mins = ['blank', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
        'twenty one', 'twenty two', 'twenty three', 'twenty four',
        'twenty five', 'twenty six', 'twenty seven', 'twenty eight',
        'twenty nine']


def solve(time):
    t = time.split(':')
    h = int(t[0])
    m = int(t[1])

    # rationalise hour
    if h >= 13:
        h -= 12

    # case one - on the hour
    if m == 0:
        if h == 0:
            return 'midnight'
        else:
            return f"{hours[h]} o'clock"

    if m == 30:
        return f"half past {hours[h]}"

    if m == 15:
        return f"quarter past {hours[h]}"

    if m == 1:
        return f"one minute past {hours[h]}"

    if m < 30:
        return f"{mins[m]} minutes past {hours[h]}"

    # now we need "to" hours ...
    if h < 11:
        h = h+1
    elif t[0] == '23':
        h = 0
    else:
        h = 12

    if m == 45:
        return f"quarter to {hours[h]}"

    if m == 59:
        return f"one minute to {hours[h]}"

    return f"{mins[60-m]} minutes to {hours[h]}"
