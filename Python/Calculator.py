#uses Python3

import sys


def minOperations(n):

    if n <= 1:
        print("0")
        return n

    minOperationsArr = [None] * (n+1)
    backTrack = []

    minOperationsArr[0] = 0
    minOperationsArr[1] = 0


    for x in range(2,n+1):

        if x % 2 == 0 and x % 3 == 0:
            minOperationsArr[x] = min(minOperationsArr[x - 1] + 1,
                                      minOperationsArr[x // 2] + 1,
                                      minOperationsArr[x // 3] + 1)

        elif x % 2 == 0 and x % 3 != 0:
            minOperationsArr[x] = min ( minOperationsArr[x-1] + 1,
                                    minOperationsArr[x // 2] + 1 )
        elif x % 2 != 0 and x % 3 == 0:
            minOperationsArr[x] = min(minOperationsArr[x - 1] + 1,
                                   minOperationsArr[x // 3] + 1)


        else:
            minOperationsArr[x] = minOperationsArr[x - 1] + 1

    numOperations = minOperationsArr[n]

    prevIndex = n
    #print(minOperationsArr)
    #print(prevIndex)

    backTrack.append(prevIndex)
    #print(backTrack)

    while numOperations > 0:

        if prevIndex <= 2:
            backTrack.append(1)
            break


        if prevIndex % 2 != 0 and prevIndex % 3 != 0:
            prevIndex -= 1
            backTrack.append(prevIndex)
            numOperations -= 1

        elif prevIndex % 2 == 0 and prevIndex % 3 != 0:

            temp = minOperationsArr[prevIndex - 1]
            temp2= minOperationsArr[prevIndex// 2]

            if temp <= temp2:
                prevIndex -= 1
            elif temp >= temp2:
                prevIndex = (prevIndex // 2)

            backTrack.append(prevIndex)
            numOperations -= 1

        elif prevIndex % 2 != 0 and prevIndex % 3 == 0:
            temp = minOperationsArr[prevIndex - 1]
            temp2 = minOperationsArr[prevIndex // 3]

            if temp <= temp2:
                prevIndex -= 1
            elif temp >= temp2:
                prevIndex = (prevIndex // 3)

            backTrack.append(prevIndex)
            numOperations -= 1

        else:

              temp =  minOperationsArr[prevIndex - 1]
              temp2 = minOperationsArr[prevIndex // 2]
              temp3 = minOperationsArr[prevIndex // 3]

              list_min = min(temp,temp2,temp3)

              if list_min == temp:
                  prevIndex -= 1
              elif list_min == temp2:
                  prevIndex = prevIndex // 2
              else:
                  prevIndex = prevIndex // 3

              backTrack.append(prevIndex)
              numOperations -= 1

    backTrack.reverse()
    print(minOperationsArr[n])
    print(backTrack)

























n = int(input().strip())

result = minOperations(n)
print(result)

