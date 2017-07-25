<h2> binarySearch.js </h2>

Task. The goal in this code problem is to implement the binary search algorithm.
Input Format. The first line of the input contains an integer 𝑛 and a sequence 𝑎0 < 𝑎1 < . . . < 𝑎𝑛−1 of
𝑛 pairwise distinct positive integers in increasing order. The next line contains an integer 𝑘 and 𝑘
positive integers 𝑏0, 𝑏1, . . . , 𝑏𝑘−1.

Constraints. 1 ≤ 𝑛, 𝑘 ≤ 105; 1 ≤ 𝑎𝑖 ≤ 109 for all 0 ≤ 𝑖 < 𝑛; 1 ≤ 𝑏𝑗 ≤ 109 for all 0 ≤ 𝑗 < 𝑘;

Output Format. For all 𝑖 from 0 to 𝑘 − 1, output an index 0 ≤ 𝑗 ≤ 𝑛 − 1 such that 𝑎𝑗 = 𝑏𝑖 or −1 if there
is no such index

<h2> majorityElement.js </h2>
Task. The goal in this code problem is to check whether an input sequence contains a majority element.

Input Format. The first line contains an integer 𝑛, the next one contains a sequence of 𝑛 non-negative
integers 𝑎0, 𝑎1, . . . , 𝑎𝑛−1.

Constraints. 1 ≤ 𝑛 ≤ 105

Output Format. Output 1 if the sequence contains an element that appears strictly more than 𝑛/2 times,
and 0 otherwise

<h2> quickSort.js </h2>
Task. To force the given implementation of the quick sort algorithm to efficiently process sequences with
few unique elements, your goal is replace a 2-way partition with a 3-way partition. That is, your new
partition procedure should partition the array into three parts: < 𝑥 part, = 𝑥 part, and > 𝑥 part.

Input Format. The first line of the input contains an integer 𝑛. The next line contains a sequence of 𝑛
integers 𝑎0, 𝑎1, . . . , 𝑎𝑛−1.

Constraints. 1 ≤ 𝑛 ≤ 105
; 1 ≤ 𝑎𝑖 ≤ 109
for all 0 ≤ 𝑖 < 𝑛.

Output Format. Output this sequence sorted in non-decreasing order

<h2> mergeSort_inversions.js </h2>
Task. The goal in this problem is to count the number of inversions of a given sequence.

Input Format. The first line contains an integer 𝑛, the next one contains a sequence of integers

Output Format. Output the number of inversions in the sequence.

<h2> closestPoints </h2>
Task. Given 𝑛 points on a plane, find the smallest distance between a pair of two (different) points. Recall
that the distance between points (𝑥1, 𝑦1) and (𝑥2, 𝑦2) is equal to (𝑥1 − 𝑥2)^2 + (𝑦1 − 𝑦2)^2.

Input Format. The first line contains the number 𝑛 of points. Each of the following 𝑛 lines defines a point
(𝑥𝑖, 𝑦𝑖).

Constraints. 1 ≤ 𝑛 ≤ 105; −109 ≤ 𝑥𝑖, 𝑦𝑖 ≤ 109 are integers.

Output Format. Output the minimum distance. The absolute value of the difference between the answer
of your program and the optimal value should be at most 10−3.

<h2>  lottery.js </h2>
You are organizing an online lottery. To participate, a person bets on a single
integer. You then draw several ranges of consecutive integers at random.
A participant’s payoff then is proportional to the number of ranges that
contain the participant’s number minus the number of ranges that does not
contain it. You need an efficient algorithm for computing the payoffs for all
participants. A naive way to do this is to simply scan, for all participants, the
list of all ranges. However, you lottery is very popular: you have thousands
of participants and thousands of ranges. For this reason, you cannot afford
a slow naive algorithm.

Task. You are given a set of points on a line and a set of segments on a line. The goal is to compute, for
each point, the number of segments that contain this point.

Input Format. The first line contains two non-negative integers 𝑠 and 𝑝 defining the number of segments
and the number of points on a line, respectively. The next 𝑠 lines contain two integers 𝑎𝑖, 𝑏𝑖 defining
the 𝑖-th segment [𝑎𝑖, 𝑏𝑖]. The next line contains 𝑝 integers defining points 𝑥1, 𝑥2, . . . , 𝑥𝑝.

