#python3

def change(m):
    one = 1
    five = 5
    ten = 10
    counter = 0
    low = 0

    while(m != 0):
        list1 = [m-one, m-five, m-ten]
        low = min(n for n in list1 if n >= 0)
        counter += 1
        m = low

    return counter



m = int(input())
result = change(m)
print(result)
