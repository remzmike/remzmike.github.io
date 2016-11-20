# Snapple Real Fact #804: There are 293 ways to make change for a dollar.
import timeit, sys, os
from math import floor
import platform
impl = platform.python_implementation().lower()

def a1():

    combinations = []

    for a in xrange(100//100+1):
        for b in xrange(100//50+1):
            for c in xrange(100//25+1):
                for d in xrange(100//10+1):
                    for e in xrange(100//5+1):
                        for f in xrange(100//1+1):
                            amt = a * 100 + b * 50 + c * 25 + d * 10 + e * 5 + f * 1
                            if amt==100:
                                combinations.append([a,b,c,d,e,f])
                                break

    return combinations

def a2():

    combinations = []

    for a in xrange(100//100+1):
        for b in xrange(100//50+1):
            for c in xrange(100//25+1):
                for d in xrange(100//10+1):
                    for e in xrange(100//5+1):
                        for f in xrange(100//1+1):
                            amt = a * 100 + b * 50 + c * 25 + d * 10 + e * 5 + f * 1
                            if amt>100:
                                break
                            elif amt==100:
                                combinations.append([a,b,c,d,e,f])
                                break

    return combinations

def a3():

    combinations = []

    for a in xrange(100//100+1):
        ac = a * 100
        if ac > 100: break
        for b in xrange(100//50+1):
            bc = ac + b * 50
            if bc > 100: break
            for c in xrange(100//25+1):
                cc = bc + c * 25
                if cc > 100: break
                for d in xrange(100//10+1):
                    dc = cc + d * 10
                    if dc > 100: break
                    for e in xrange(100//5+1):
                        ec = dc + e * 5
                        if ec > 100: break
                        for f in xrange(100//1+1):
                            fc = ec + f
                            if fc==100:
                                combinations.append([a,b,c,d,e,f])
                                break

    return combinations

def a4():

    combinations = []

    ac = 0
    for a in xrange(100//100+1):
        if ac > 100: break
        bc = ac
        for b in xrange(100//50+1):
            if bc > 100: break
            cc = bc
            for c in xrange(100//25+1):
                if cc > 100: break
                dc = cc
                for d in xrange(100//10+1):
                    if dc > 100: break
                    ec = dc
                    for e in xrange(100//5+1):
                        if ec > 100: break
                        for f in xrange(100//1+1):
                            fc = ec + f
                            if fc==100:
                                combinations.append([a,b,c,d,e,f])
                                break
                        ec += 5
                    dc += 10
                cc += 25
            bc += 50
        ac += 100

    return combinations

if __name__=='__main__':
    for fn in [a1, a2, a3, a4]:
        print 'testing', fn.__name__
        combinations = fn()
        print 'result:',  len(combinations)
        assert len(combinations) == 293
        assert [0,0,1,7,1,0] in combinations
        assert [0,0,1,7,0,5] in combinations
        assert [1,0,0,0,0,0] in combinations
        if fn.__name__ == 'a1' and impl=='cpython':
            repeat = 20
        else:
            repeat = 100
        times = timeit.repeat(fn.__name__+'()', 'from __main__ import '+fn.__name__, repeat=repeat, number=1)
        print min(times) * 1000
        print ''

'''
(milliseconds)
C:\Code2>python -O change.py
testing a1
result: 293
225.243115942

testing a2
result: 293
7.4115942029

testing a3
result: 293
0.76231884058

testing a4
result: 293
0.741666666666
'''

'''
[PyPy 1.7.0 with MSC v.1500 32 bit]
C:\Code2>c:\pypy\pypy.exe change.py
testing a1
result: 293
8.90869565217

testing a2
result: 293
0.140579710145

testing a3
result: 293
0.119565217391

testing a4
result: 293
0.0913043478261
'''

'''
[PyPy 1.8.0 with MSC v.1500 32 bit]
C:\Code2>c:\pypy\pypy.exe change.py
testing a1
result: 293
2.20652173913

testing a2
result: 293
0.327173913043

testing a3
result: 293
0.140217391304

testing a4
result: 293
0.139130434783
'''

# non-brute force, if interested in meaning
# http://wiki.answers.com/Q/How_many_ways_are_there_to_make_change_for_a_dollar
kvalues = []
for k in range(20+1):
    value = floor(k/2)+1
    kvalues.append(value)
qvalues = []
for q in range(4+1):
    qvalues.append(sum(kvalues[:q*5+1]))
# same pypy speed as magic2, usually, int(x) makes it slower
def magic1():       
    # 5n + 10d + 25q = 100 is 1n + 2d + 5q = 20
    # then floor(n/2)+1 = count to make n cents using nickels, dimes, quarters
    # summation to deal with pennies
    # 0 quarters
    q0 = qvalues[4]
    # 1 quarters
    q1 = qvalues[3]
    # 2 quarters
    q2 = qvalues[2]
    # 3 quarters
    q3 = qvalues[1]
    # 4 quarter
    q4 = qvalues[0]

    x = q0 + q1 + q2 + q3 + q4
    
    # 1 half dollars, same as above except make 50
    # 5n + 10d + 25q = 50 is 1n + 2d + 5q = 10
    # 0 quarters, same as 2 with 1 dollar
    x += q2
    # 1 quarters, same as 3 with 1 dollar
    x += q3
    # 2 quarters, same as 4 with 1 dollar
    x += q4
    
    # 2 half dollars, make 0 cents using quarters, dimes, nickels, pennies
    # same as 4 with 1 dollar
    x += q4

    # 1 dollar coin
    x += 1
    
    return x

# pypy 35x faster than a4 pypy, 1.8 microseconds
def magic2(d=1):    
    return (1 + d) * (6 + 121 * d + 362 * d**2 + 310 * d**3 + 80 * d**4 ) / 6

# pypy 1.5x faster than magic2 pypy, 1.2 microseconds
def magic3():    
    return (1 + 1) * (6 + 121 * 1 + 362 * 1**2 + 310 * 1**3 + 80 * 1**4 ) / 6

# pypy 2x faster than magic2 pypy, 0.9 microseconds
def magic4():
    return 293

# taylor series with algopy. slowest. slower than a1 in cpython        
# wolfram|alpha: Series[1/( (1-x)*(1-x^5)*(1-x^10)*(1-x^25)*(1-x^50)*(1-x^100) ), {x, 0, 100}]
if impl=='cpython':
    def algo_f(x):
    	return 1/( (1-x)*(1-x**5)*(1-x**10)*(1-x**25)*(1-x**50)*(1-x**100) )

    import numpy
    from algopy import UTPM
    D = 101; P = 1
    derp = numpy.zeros((D,P))        
def magic5():    
    x = UTPM(derp)
    x.data[1,0] = 1

    y = algo_f(x)    
    #print len(y.data)
    #print y.data[100], 
    return y.data[100][0]

if __name__=='__main__':    
    fns = [magic1, magic2, magic3, magic4]
    if impl == 'cpython':
        fns.append(magic5)    
    for fn in fns:
        print 'testing', fn.__name__
        result = fn()
        print 'result:',  result
        if fn.__name__ == 'magic5':
            repeat = 20
        else:
            repeat = 100
        times = timeit.repeat(fn.__name__+'()', 'from __main__ import '+fn.__name__, repeat=repeat, number=1)
        print min(times) * 1000
        print ''