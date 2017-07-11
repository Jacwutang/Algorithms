#uses Python3

import sys


def maxGold(n,capacity,weights):

  values = [[0 for x in range (capacity + 1)] for y in range(n+1)]

  for j in range(1,n+1):


    for w in range(1,capacity+1):
        prev = values[j-1][w]

        if weights[j] <= w:
            cur = values[j-1][w-weights[j]] + weights[j]

            if cur > prev:
                values[j][w] = cur
        else:
            values[j][w] = prev

  for y in range(n+1):
   print(values[y])

  return values[n][capacity]



















capacity, n = map(int,sys.stdin.readline().split())

weights = [int(x) for x in sys.stdin.readline().split()]

weights.insert(0,0)

result = maxGold(n,capacity,weights)

print(result)

#print(capacity,n,weights)