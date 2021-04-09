# https://www.codewars.com/kata/595910299197d929a10005ae

def pizza_rewards(customers, min_orders, min_price):
    ret = []
    for key, value in customers.items():
        if len(list(filter(lambda x: x >= min_price, value))) >= min_orders:
            ret.append(key)
    return set(ret)
