# https://www.codewars.com/kata/587d7544f1be39c48c000109

import math


def distance(p1, p2):
    return math.sqrt(math.pow(p1[0] - p2[0], 2) + math.pow(p1[1] - p2[1], 2))


def harvester_rescue(data):
    wormTime = distance(data['harvester'], data['worm'][0]) / data['worm'][1]
    carryallTime = distance(data['harvester'], data['carryall'][0]) / data['carryall'][1]
    escape = carryallTime < (wormTime - 1)
    return 'The spice must flow! Rescue the harvester!' if escape else 'Damn the spice! I\'ll rescue the miners!'
