# python3

import sys, threading
sys.setrecursionlimit(10**7) # max depth of recursion
threading.stack_size(2**27)  # new thread will get stack of such size

class Stack:
        def __init__(self):
                self.arr = []

        def isEmpty(self):
                return self.arr == []

        def size(self):
                return len(self.arr)

        def push(self, item):
                self.arr.append(item)

        def pop(self):
                self.arr.pop()

        def peek(self):
                return self.arr[len(self.arr) - 1]

class Queue:

        def __init__(self):
                self.arr = []

        def isEmpty(self):
                return self.arr == []

        def enQueue(self,item):
                self.arr.append(item)

        def deQueue(self):
                front = 0
                begin = self.arr[front]
                del self.arr[front]
                return begin
        def size(self):
                return len(self.arr)

class Node:
        def __init__(self):
                self.children = []
                self.data = None








class TreeHeight:

        def read(self):
                self.n = int(sys.stdin.readline())
                self.parent = list(map(int, sys.stdin.readline().split()))


        def createTree(self):


                self.Nodes = [None] * (self.n + 1)

                for x in range(self.n + 1):
                        self.Nodes[x] = Node()



                for x in range(self.n):



                        if self.parent[x] == -1:
                                self.root = x
                        else:
                                self.Nodes[self.parent[x]].data = self.parent[x]
                                self.Nodes[self.parent[x]].children.append(x)


                




        def computeHeight(self):

                height = 0
                nodeCount = 0
                q = Queue()


                q.enQueue(self.root)





                while q.isEmpty() == False:
                        nodeCount = q.size()

                        height += 1



                        while nodeCount > 0:
                                temp = q.deQueue()


                                while self.Nodes[temp].children != []:


                                        item = self.Nodes[temp].children.pop()
                                        if item != None:
                                                q.enQueue(item)

                                nodeCount -= 1
                return height
































def main():
        tree = TreeHeight()
        tree.read()
        tree.createTree()

        print(tree.computeHeight())

threading.Thread(target=main).start()
