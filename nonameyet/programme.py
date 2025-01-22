import tkinter as tk

#############################################################################################################################

class Canvas(tk.Canvas):

    def __init__(self, parent):

        self.width, self.height = 10, 10
        self.rap = int((parent.winfo_screenheight() // 1.2) // self.height)
        self.dis = self.rap // 10
        self.bg = 'white'

        self.cont = [[0 for j in range(self.height)] for i in range(self.width)]
        self.reac = self.cont[:]

        tk.Canvas.__init__(self, parent, width = self.width * self.rap, height = self.height * self.rap, bg = self.bg)
        self.grid()

        return

    def line(self, x1, y1, x2, y2, typ):

        w = int()
        if typ == 0:
            w = self.dis // 2
        elif typ == 1:
            w = self.dis

        return self.create_line(x1 * self.rap, y1 * self.rap, x2 * self.rap, y2 * self.rap, fill = 'lightgrey', width = w)

    def oval(self, x, y, c):

        self.cont[x][y] = 1
        
        return self.create_oval(x * self.rap + self.dis * 2, y * self.rap + self.dis * 2, (x + 1) * self.rap - self.dis * 2, (y + 1) * self.rap - self.dis * 2, fill = c, width = self.dis)

    def reach(self, piece, co, erase = True):

        return

class TempCan:

    def __init__(self, width, height, cont):

        self.width, self.height = width, height
        self.cont = cont

        return

class TempEvt:

    def __init__(self, co):

        self.x, self.y = co[0] * can.rap, co[1] * can.rap

        return

def color(n):

    c = 'red'
    if n == 1:
        c = 'blue'

    return c

win = tk.Tk()
win.title('Jeu sans nom')
can = Canvas(win)

for i in range(0, max(can.width, can.height) + 1):
    can.line(i, 0, i, can.height, 0)
    can.line(0, i, can.width, i, 0)

#############################################################################################################################

ps = [(0, 0), (can.width - 1, can.height - 1)]
for i in range(len(ps)):
    can.oval(ps[i][0], ps[i][1], color(i))

p = 1
st = True
piece = 'Roi'

#############################################################################################################################

def reach(piece, c0, c1):

    if piece == 'Roi':
        return abs(c0[0] - c1[0]) in range(2) and abs(c0[1] - c1[1]) in range(2)
    elif piece == 'Tour':
        return c0[0] == c1[0] or c0[1] == c1[1]
    elif piece == 'Fou':
        return abs(c0[0] - c1[0]) == abs(c0[1] - c1[1])
    elif piece == 'Reine':
        return reach('Tour', c0, c1) or reach('Fou', c0, c1)
    elif piece == 'Cavalier':
        return (abs(c0[0] - c1[0]) == 1 and abs(c0[1] - c1[1]) == 2) or (abs(c0[0] - c1[0]) == 2 and abs(c0[1] - c1[1]) == 1)

    return True

def getReach(can, co, ca, piece = 'Roi'): # co coords joueur, ca coords adversaire

    t1 = [[(i, j) for j in range(can.height) if (can.cont[i][j] == 0 or (i, j) == ca) and reach(piece, co, (i, j))] for i in range(can.width)]
    l = sum([len(i) for i in t1])
    t2 = [(0, 0) for i in range(l)]
    c = 0
    for i in t1:
        for j in i:
            t2[c] = j
            c += 1
    return t2

#############################################################################################################################

def vict(c0, c1, c2, piece): # c0 anciennes coords, c1 nvlles, c2 adversaire

    return c1 == c2 and reach(piece, c0, c1)

def perd(can, co, ca, piece): # ca coords adversaire

    return len([0 for i in getReach(can, co, ca, piece) if can.cont[i[0]][i[1]] == 0]) == 0

#############################################################################################################################

class Bot:

    def __init__(self, p, piece, can):

        self.p = p
        self.piece = piece
        self.can = can
        self.profmax = 1

        return

    def newGrid(self, l1, move):

#        l2 = [[int(l1[i][j] == 1 or (i, j) == move) for j in range(len(l1[i]))] for i in range(len(l1))]
        l2 = [i[:] for i in l1]
        l2[move[0]][move[1]] = 1

        return l2

    def analyse(self, cur, c0, c1, c2, c3, p, prof): # cur grille analysée, c0 anciennes coords, c1 nouvelles coords, c2 anciennes coords adv, c3 coords adv, p joueur prof profondeur

        if prof > self.profmax:
            return 0
        
        np = 1 - p

        if vict(c2, c3, c1, self.piece):
            return - ((np == self.p) * 2 - 1) * (self.profmax - prof + 1)
        elif perd(TempCan(self.can.width, self.can.height, cur), c1, c3, self.piece):
            return ((np == self.p) * 2 - 1) * (self.profmax - prof + 1)

        reac = getReach(TempCan(self.can.width, self.can.height, cur), c1, c3, self.piece)
        t = [0 for i in range(len(reac))]
        k = False

        for i in range(len(reac)):
            if vict(c1, reac[i], c3, self.piece):
                t[i] = ((np == self.p) * 2 - 1) * 10
                k = True

        if not k:
            t = [self.analyse(self.newGrid(cur, i), c2, c3, c1, i, np, prof + 1) for i in reac]
        if prof == 0:
            return t
        return sum(t)

bot = True
bt = False
b1 = Bot(1, piece, can)

#############################################################################################################################

def place(event = None):
    global ps, p, st, bt

    if not st:
        return

    p = 1 - p
    c = color(p)
    
    x = event.x // can.rap
    y = event.y // can.rap
    if vict(ps[p], (x, y), ps[1 - p], piece):
        print(f'VICTOIRE DU JOUEUR {p}')
        st = False
        return
    elif can.cont[x][y] == 1 or not reach(piece, ps[p], (x, y)):
        print('INVALIDE')
        p = 1 - p
        return

    can.line(ps[p][0], ps[p][1], ps[p][0] + 1, ps[p][1] + 1, 1)
    can.line(ps[p][0] + 1, ps[p][1], ps[p][0], ps[p][1] + 1, 1)

    if bot:
        bt = not bt
        if bt:
            an = b1.analyse(can.cont[:], (ps[1][0], ps[1][1]), (ps[1][0], ps[1][1]), (ps[0][0], ps[0][1]), (x, y), p, 0)
            btr = getReach(can, ps[1 - p], (x, y))
            print()
            print(an)
            print(btr)

    ps[p] = (x, y)
    can.cont[x][y] = 1

    can.oval(x, y, c)
    can.reach(piece, ps[p])

    can.update()

    if perd(can, ps[p], ps[1 - p], piece):
        print(f'VICTOIRE DU JOUEUR {1 - p}')
        st = False
        return

    if bot and bt:
        place(TempEvt(btr[an.index(max(an))]))

    return

#############################################################################################################################

can.bind('<Button-1>', place)

win.mainloop()
