# https://www.codewars.com/kata/5e7837d0262211001ecf04d7

def html(*args, **optionals):
    l = f'<{args[0]}'
    for key, value in optionals.items():
        l = f'{l} {"class" if key == "cls" else "style" if key == "printstyle" else key}="{value}"'
    if len(args) == 1:
        return f'{l} />'
    ret = list(map(lambda s: f'{l}>{s}</{args[0]}>', args[1:] ))
    return "\n".join(ret)