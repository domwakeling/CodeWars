# https://www.codewars.com/kata/56eb16655250549e4b0013f4

import datetime

weekdays = ['Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday', 'Sunday']


def most_frequent_days(year):
    dayOne = datetime.date(year, 1, 1)
    dayLast = datetime.date(year, 12, 31)
    daysInYear = (dayLast - dayOne).days + 1

    # if not a leapyear, only one day
    if daysInYear == 365:
        return [weekdays[dayOne.weekday()]]
    else:
        days = [dayOne.weekday(), (dayOne + datetime.timedelta(days=1)).weekday()]
        days.sort()
        return list(map(lambda x: weekdays[x], days))
