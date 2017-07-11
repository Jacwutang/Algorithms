#Python3
import sys


class BuildHeap:

    def __init__(self,arr):
        self.arr = arr
        self.size = len(arr) - 1
        self.counter = 0
        self.result = ""
        self.tempArr = []
    def LeftChild(self,index):
        if index == 0:
            return index + 1

        return (2*index) + 1


    def RightChild(self,index):
        if index == 0:
            return index + 2

        return (2*index) + 2

    def siftDown(self,index):



        maxIndex = index

        left = self.LeftChild(index)


        if left <= self.size and self.arr[left] < self.arr[maxIndex]:
            maxIndex = left

        right = self.RightChild(index)

        if right <= self.size and self.arr[right] < self.arr[maxIndex]:
            maxIndex = right

        if index != maxIndex:

            #self.result += str(index) + ' ' + str(maxIndex) + '\n'
            self.tempArr.append(index)
            self.tempArr.append(maxIndex)


            self.counter += 1

            temp = self.arr[index]

            self.arr[index] = self.arr[maxIndex]

            self.arr[maxIndex] = temp

            self.siftDown(maxIndex)

        if index == 0:
            return self.counter


n = int(input())
arr = list(map(int,sys.stdin.readline().split()))

b = BuildHeap(arr)

for x in range( len(arr) // 2, -1, -1):
   if x != 0:
       b.siftDown(x)
   else:
       result = b.siftDown(x)




print(b.result)


for x in range(b.counter):

    print(' '.join(str(x) for x in b.tempArr[0:2]))
    del b.tempArr[0:2]




