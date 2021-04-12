# https://www.codewars.com/kata/5202ef17a402dd033c000009

def title_case(*args):
    title = list(map(lambda x: x.lower(), args[0].split(' ')))
    exceptions = list(map(lambda x: x.lower(), args[1].split(' '))) if len(args) > 1 else []
    if len(title) < 2:
        return "".join(title).capitalize()
    else:
        return title[0].capitalize() + " " + " ".join(list(map(lambda x: x if x in exceptions else x.capitalize(), title[1:])))
