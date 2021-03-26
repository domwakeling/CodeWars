# https://www.codewars.com/kata/5e95b6e90663180028f2329d

# only_show_wrong()

# useful things
directions = ["^", ">", "v", "<"]
vectors = ([0, -1], [1,0], [0, 1], [-1, 0])
objectlist = ["C", "K", "H"]

# helper used in findPlayerInField
def findPlayerDirectionInField(field, direction):
    for (idxRow, row) in enumerate(field):
        try:
            col = row.index(direction)
            return (col, idxRow)
        except:
            pass
    return False

# get player info: returns x (column), y (row), and direction (0=up, 1 = right etc)
def findPlayerInField(field):
    for (idxD, iconD) in enumerate(directions):
        if findPlayerDirectionInField(field, iconD) != False:
            x, y = findPlayerDirectionInField(field, iconD)
            return (x, y, idxD)
    
def rpg(field: List[List[str]], actions: List[str]) -> Tuple[List[List[str]], int, int, int, List[str]]:
    # work out how large the grid is
    (maxX, maxY) = (len(field[0]), len(field))
    
    # record basics of the player
    hp = 3
    maxhp = 3
    attack = 1
    defense = 1
    demonhp = 10
    bag = []
    kills = 0
    merchants=[]
    
    # cycle through actions
    for action in actions:
        # get current location and direction
        (px, py, pd) = findPlayerInField(field)
        
        # flag for monsters being able to attack, and opportunity
        opportunity = False
        monsterattack = False
        
        # if we're trying to turn ...
        if directions.count(action) > 0:
            field[py][px] = action
            monsterattack = True
        
        # if we're trying to use a potion ...
        if action == "H":
            # if we don't have a potion error out
            if bag.count("H") == 0:
                return None
            # if we're not injured, error out
            if hp == maxhp:
                return None
            # we have a potion and we're injured - use it, lose it
            hp = min(hp+3, maxhp)
            bag.remove("H")
            monsterattack = True
        
        # if we're trying to use a key ...
        if action == "K":
            # if we don't have a key error out
            if bag.count("K") == 0:
                return None
            # which way are we facing?
            (propx, propy) = (px + vectors[pd][0], py + vectors[pd][1])
            # error if we're at a boundary facing edge
            if propx < 0 or propy < 0 or propx >= maxX or propy >= maxY:
                return None
            # error out if we're not facing a door
            if field[propy][propx] != "|" and field[propy][propx] != "-":
                return None
            # otherwise we're in front of a door ...
            field[propy][propx] = " "
            bag.remove("K")
        
        # if we're trying to use coin
        if action == "C":
            # what's the location in front of us?
            (propx, propy) = (px + vectors[pd][0], py + vectors[pd][1])
            # error if we're at a boundary facing edge
            if propx < 0 or propy < 0 or propx >= maxX or propy >= maxY:
                return None
            # error if we're not facing a merchant
            if field[propy][propx] != "M":
                return None
            # error if we don't have a coin
            if bag.count("C") == 0:
                return None
            # is the merchant in our list already?
            merchant = list(filter(lambda m: m['x'] == propx and m['y'] == propy, merchants))
            if len(merchant) == 0:
                # no such merchant, so add a new one
                merchants.append({'x': propx, 'y': propy, 'v': 2})
                bag.remove("C")
            else:
                # already a merchant
                if merchant[0]['v'] == 1:
                    # this is the third coin, get rid of them
                    merchants = list(filter(lambda m: m['x'] != propx or m['y'] != propy, merchants))
                    field[propy][propx] = " "
                    bag.remove("C")
                else:
                    # already in merchants, not on last coin, so v needs to be set to 1
                    for m in merchants:
                        if m['x'] == propx and m['y'] == propy:
                        # m.update(("v", 2) for k, v in d.iteritems() if v == "value2")
                            m.update({"v": 1})
                    bag.remove("C")
        
        # if we're trying to attack
        if action == "A":
            monsterattack = True
            # which cell is in front of us?
            (propx, propy) = (px + vectors[pd][0], py + vectors[pd][1])
            # error if we're at a boundary facing edge
            if propx < 0 or propy < 0 or propx >= maxX or propy >= maxY:
                return None
            # error out if we're not facing an enemy
            if field[propy][propx] != "E" and field[propy][propx] != "D":
                return None
            # otherwise we're in front of a enemy ...
            if field[propy][propx] == "E":
                # in front of a minor enemy, going to kill them
                field[propy][propx] = " "
                kills = kills + 1
                if kills == 3:
                    attack = attack + 1
                    kills = 0
            #remaining option, in front of the demonking
            else:
                demonhp = max(0, demonhp - attack)
                if demonhp == 0:
                    field[propy][propx] = " "
        
        # trying to move forward
        elif action == "F":
            # monster can attack from opportunity
            monsterattack = True
            opportunity = True
            # proposed new location
            (propx, propy) = (px + vectors[pd][0], py + vectors[pd][1])
            # check in-bounds, error out if not
            if propx < 0 or propy < 0 or propx >= maxX or propy >= maxY:
                return None
            # check if empty, if so move
            elif field[propy][propx] == " ":
                field[propy][propx] = directions[pd]
                field[py][px] = " "
            # check if contains an object, if so move and pick up
            elif objectlist.count(field[propy][propx]) > 0:
                bag.append(field[propy][propx])
                field[propy][propx] = directions[pd]
                field[py][px] = " "
            # check if contains double swords, if so move and pick up
            elif field[propy][propx] == "X":
                attack = attack + 1
                field[propy][propx] = directions[pd]
                field[py][px] = " "
            # check if contains shield, if so move and pick up
            elif field[propy][propx] == "S":
                defense = defense + 1
                field[propy][propx] = directions[pd]
                field[py][px] = " "
            # otherwise we tried to move and there's nowhere to go
            else:
                return None
        
        # player actions done; anyone attacking directly?
        if monsterattack and not opportunity:
            # make sure we have the current player location
            (px, py, pd) = findPlayerInField(field)
            # we **haven't** just moved; look in each direction
            for v in vectors:
                (propx, propy) = (px + v[0], py + v[1])
                if propx >= 0 and propy >= 0 and propx < maxX and propy < maxY:
                    if field[propy][propx] == "E":
                        hp = hp - max(0, 2 - defense)
                    elif field[propy][propx] == "D":
                        hp = hp - max(0, 3 - defense)
        
        # player actions done; anyone attacking on opportunity?
        if monsterattack and opportunity:
            # get current player location
            (px, py, pd) = findPlayerInField(field)
            # we **have** just moved; where WERE we?
            px = px - vectors[pd][0]
            py = py - vectors[pd][1]
            # look in each direction
            for v in vectors:
                (propx, propy) = (px + v[0], py + v[1])
                if propx >= 0 and propy >= 0 and propx < maxX and propy < maxY:
                    if field[propy][propx] == "E":
                        hp = hp - max(0, 2 - defense)
                    elif field[propy][propx] == "D":
                        hp = hp - max(0, 3 - defense)
        
        # check still alive
        if hp <= 0:
            return None
    
    # return
    return(field, hp, attack, defense, sorted(bag))