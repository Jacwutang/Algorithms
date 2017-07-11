# Uses python3
import sys

def get_majority_element(arr):


    if len(arr) < 2:
        return arr[0]

    midpoint = len(arr) // 2


    left = arr[:midpoint]


    right = arr[midpoint:]


    majority_left = 0
    majority_right = 0


    temp_left = get_majority_element(left)
    if temp_left != None:
        majority_left = temp_left



    temp_right = get_majority_element(right)
    if temp_right != None:
        majority_right = temp_right


    counterLeft = 0
    counterRight = 0

    for x in range( len(arr) ):


        if arr[x] == majority_left:
            counterLeft+=1
        elif arr[x] == majority_right:
            counterRight+=1

    if counterLeft > len(arr) // 2:
        print("hello")
        return 1

    elif counterRight > len(arr) // 2:
        print("yellow")
        return 1

    else:
        return 0


input = sys.stdin.read()
n, *arr = list(map(int, input.split()))


left = []
right = []
temp = []


result = get_majority_element(arr)
if result > 0:
    result = 1

print(result)

# if get_majority_element(arr,left, right) != -1:
#     print(1)
# else:
#     print(0)



# I.e. say you have array a = [2 3 9 2 2] as stated in the problem statement. You split it into b1 = [2 3] and b2 = [9 2 2]. You then split b1 into b11 = [2] and b12 = [3]. You then return 2 and 3, and count their occurrence in b1. If either happens more than (n/2 = 2/2 = 1) times in b1, they are a majority element of b1. Otherwise, b1 contains no majority element and you return 0. Your program will then start recursively splitting b2 using the same procedure as above. It will then see that a majority element in b2 is 2, and count the number of its occurrences in a, to conclude that it happens more than (n/2 = 5/2 = 2) times in a and it is thus a majority element.
