# https://www.codewars.com/kata/5427db696f30afd74b0006a3

def bowling_score(rolls):
    # parse into rounds
    rounds = []
    round = []
    for idx in range(len(rolls)):
        round.append(rolls[idx])
        if len(round) == 2 or rolls[idx] == 10:
            rounds.append(round)
            round = []
    if len(round) > 0:
        rounds.append(round)

    score = 0

    for idx in range(10):
        round = 0
        for num in rounds[idx]:
            round += num
        score += round
        if round == 10:
            score += rounds[idx+1][0]
            if len(rounds[idx]) == 1:
                if len(rounds[idx+1]) == 2:
                    score += rounds[idx+1][1]
                else:
                    score += rounds[idx+2][0]

    return score
