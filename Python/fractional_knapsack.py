#python3
import sys

def knapsack(n,capacity,arr):

    temp = []
    values = 0
    max_value2 = 0

    for x in range(n):
        temp.append(arr[x][0] / arr[x][1])

    while(capacity > 0 and n > 0):
        max_index = temp.index(max(temp))
        max_value = arr[max_index][0]


        if capacity - arr[max_index][1] >= 0:
            values += max_value
            capacity = capacity - arr[max_index][1]
            n -= 1
            del arr[max_index]
            del temp[max_index]


        elif capacity - arr[max_index][1] < 0:

            rem = capacity / arr[max_index][1]
            max_value2 = max_value * rem
            break

    return values + max_value2

n,capacity = map(int,input().split())

arr = []
for x in range(n):
    temp = [float(temp) for temp in input().strip().split()]
    arr.append(temp)
value = knapsack(n,capacity,arr)
print(format(value,'.4f'))
