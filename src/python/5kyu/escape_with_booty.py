# https://www.codewars.com/kata/5b0560ef4e44b721850000e8

import math


def check_course(sea_map):

    print(sea_map)

    dims = {'h': len(sea_map), 'w': len(sea_map[0])}

    navyShips = []

    for i in range(dims['w']):
        if sea_map[0][i] == "N":
            navyShips.append({'x': i, 'y': 0, 'd': 1})
        elif sea_map[dims['h']-1][i] == "N":
            navyShips.append({'x': i, 'y': dims['h']-1, 'd': -1})

    pirateH = 0
    for i in range(dims['h']):
        if sea_map[i][0] == "X":
            pirateH = i

    pirate = {'x': 0, 'y': pirateH}

    # test if a pirate is adjacent to ship
    for ship in navyShips:
        dist = math.sqrt(
            math.pow(ship['x'] - pirate['x'], 2) + math.pow(ship['y'] - pirate['y'], 2))
        if dist < 2.0:
            return False

    while True:

        # move ships
        pirate['x'] += 1

        for ship in navyShips:
            ship['y'] += ship['d']
            if ship['y'] == 0 or ship['y'] == dims['h'] - 1:
                ship['d'] *= -1

        # test if a pirate is adjacent to ship
        for ship in navyShips:
            dist = math.sqrt(
                math.pow(ship['x'] - pirate['x'], 2) + math.pow(ship['y'] - pirate['y'], 2))
            if dist < 2.0:
                return False

        # check if pirate has reached other side
        if pirate['x'] == dims['w'] - 1:
            return True
