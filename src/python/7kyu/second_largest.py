# https://www.codewars.com/kata/55a58505cb237a076100004a/python

def find_2nd_largest(arr):
    nums = list(set(filter(lambda x: isinstance(x, long) or isinstance(x, int), arr)))
    nums.sort(reverse=True)
    return nums[1] if len(nums) > 1 else None