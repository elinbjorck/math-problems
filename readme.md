# Probability to win a biased game of chance
How to calculate the probability to win a game, where the first participant to reach N points winns. Thare are two participants. The probability to score is biased so that its `x%` for you and `(1-x)%` for your oponent. 

After being introduced to the problem I spent some time trying to understand it and figure out how to calculate the probability to win a match. My first intinct was thet the chanse to win should remain the same as the chanse to score a point. Therefore my formula calculates the deviation from that probability.

I arived at the following formula to calculate the deviation from the x% probability to score a point:

```
N-1
Sigma (((x^N * (1-x)^n) - ((1-x)^N * x^n)) * ((N-2+n)!)/((N-1)! * (n-1)!))
n=1    \...............  ................/    \.............  ........../
                       V                                    V
        diference in Probability                  The number of ways such
        for eighter side                          a game can occour. 
        to win a game were the  
        winner score N points
        and the looser n.
```

Ressult of code with 60% chance to score a point:

```
1 point to win: 60% chance
3 points to win: 68.256% chance
5 points to win: 73.343% chance
7 points to win: 77.116% chance
9 points to win: 80.106% chance
10 points to win: 81.391% chance
```