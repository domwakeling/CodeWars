# https: // www.codewars.com/kata/5894134c8afa3618c9000146

def chess_board_cell_color(cell1, cell2):
    pos = list(
        map(lambda x: [ord(x[0]) - ord('A'), int(x[1])], [cell1, cell2]))
    return (pos[0][0] + pos[0][1] - pos[1][0] - pos[1][1]) % 2 == 0
