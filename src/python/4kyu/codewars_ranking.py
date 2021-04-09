# https://www.codewars.com/kata/51fda2d95d6efda45e00004e

class User():
    def __init__(self):
        self.rank = -8
        self.progress = 0

    def rank_difference(self, a, b):
        if (a > 0 and b > 0) or (a < 0 and b < 0):
            return a-b
        elif a > b:
            return a-b-1
        else:
            return -(b-a-1)

    def inc_progress(self, rank):
        if rank not in [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]:
            raise Exception(
                'Rank must be in the range -8 to 8 and non-zero; %s is not a valid value.' % rank)
        d = self.rank_difference(rank, self.rank)
        if d > 0:
            self.progress += 10 * d * d
        elif d == 0:
            self.progress += 3
        elif d == -1:
            self.progress += 1
        if self.rank == 8:
            self.progress = 0
        else:
            while self.progress >= 100:
                self.rank += 1
                if self.rank == 0:
                    self.rank = 1
                self.progress -= 100
                if self.rank == 8:
                    self.progress = 0
