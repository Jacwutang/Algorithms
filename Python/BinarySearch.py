#python3
import sys
import math
def BinarySearch(arr,high,low, key):

    if high < low:
        return -1


    midpoint_index = low +  ( (high - low) // 2 )

    if key == arr[midpoint_index]:
        return midpoint_index

    elif key < arr[midpoint_index]:
        return BinarySearch(arr,midpoint_index - 1, low, key)
    else:
        return BinarySearch(arr,high, midpoint_index + 1, key)





arr = [int(x) for x in input().strip().split()]
del arr[0]
high = len(arr) - 1
low = 0
#print(low,high)


query = list(map(int,input().split()))
num_query = query[0]
del query[0]


result = []
x = 0

while num_query > 0:
    temp = BinarySearch(arr,high,low,query[x])
    result.append(temp)
    num_query -= 1
    x += 1




print(" ".join(str(a) for a in result))
