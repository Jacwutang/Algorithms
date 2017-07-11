#uses Python3
import sys





def isBalanced(str):

    arr = []
    temp = []
    index = 0

    if len(str) == 1:
        return 1

    for x in range(len(str)):


        if str[x] == '(' or str[x] == '[' or str[x] == '{':
            arr.append(str[x])
            temp.append(x)
        else:
            if len(arr) == 0 and str[x] == ')' or len(arr) == 0 and str[x] == '}' or len(arr) == 0 and str[x] == ']':
                return x+1

            if len(arr) > 0:
                pop = arr[len(arr) - 1]

                if pop == '(' and str[x] == ')':
                    del temp[len(arr) - 1]
                    del arr[len(arr) - 1]

                elif pop == '(' and str[x] == ']' or pop == '(' and str[x] == '}':
                    return x + 1


                if pop == '[' and str[x] == ']':
                    del temp[len(arr) - 1]
                    del arr[len(arr) - 1]

                elif pop == '[' and str[x] == ')' or pop == '[' and str[x] == '}':
                    return x + 1

                if pop == '{' and str[x] == '}':
                    del temp[len(arr) - 1]
                    del arr[len(arr) - 1]

                elif pop == '{' and str[x] == ']' or pop == '{' and str[x] == ')':
                    return x + 1





    if len(arr) != 0:
        temp = temp.pop() + 1
        return temp
    else:
        return "Success"














arr = []

for x in sys.stdin.readline().split():
    arr.append(x)



arr = ''.join(arr)
#print(arr)

result = isBalanced(arr)
print(result)