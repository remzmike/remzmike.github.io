def int2base(x, base=26, digits='abcdefghijklmnopqrstuvwxyz', zerofill=3):
        
    if 2 > base > len(digits):
        raise Exception('base must be between 2 and '+len(digits))

    if x < 0:
        sign = '-'
        x = abs(x)
    else:
        sign = ''

    s = ''
    while x != 0:
        r = x % base
        c = digits[r]
        s = c + s
        x = x // base

    # leading zero
    delta = zerofill - len(s)
    if delta > 0:
        s = digits[0]*delta + s
    s = sign + s
    return s
    
assert int2base(0) == 'aaa'
assert int2base(1) == 'aab'
assert int2base(26) == 'aba'
assert int2base(26**3-1) == 'zzz'
assert int2base(26**3-1, zerofill=4) == 'azzz'
assert int2base(26**3) == 'baaa'

def cycle(x, leap, mod):
    val = (x * leap) % mod
    return val

digits='abcdefghijklmnopqrstuvwxyz'

import random
random.seed(42)
digits_list = list(digits)
random.shuffle(digits_list)
digits = ''.join(digits_list)

#print digits

leapval = (26**2*1)+(26**1*1)+(26**0*1)
assert int2base( leapval, digits=digits ) == digits[1]*3
modval = (26**3)
assert int2base( modval - 1, digits=digits ) == digits[-1]*3

# test full range
values = {}
for i in range(modval):
    val = cycle(i, leapval, modval)
    encoded = int2base( val, digits=digits )
    if len(encoded) != 3:
        raise Exception('encoded not 3 chars: i=' + str(i) + ', val=' + str(val) + ', encoded=' + str(encoded))
    if values.has_key(encoded):
        raise Exception('key already exists: ' + str(i))    
    values[encoded] = i
    #print encoded

assert len(values) == modval

for i in range(1000,1000+10):
#for i in range(10):
    x = cycle(i, leapval, modval)
    print i, '=', int2base(i), '=', int2base(x, digits=digits)

#for i in range(26+26):
#    print i, '=', int2base(i)

'''
1000 = bmm = qac
1001 = bmn = jqv
1002 = bmo = ljt
1003 = bmp = sid
1004 = bmq = ply
1005 = bmr = esh
1006 = bms = npb
1007 = bmt = xer
1008 = bmu = kno
1009 = bmv = mxz
'''