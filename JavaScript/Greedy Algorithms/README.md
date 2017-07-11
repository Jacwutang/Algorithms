
1. changeMoney.js

Task. The goal in this problem is to find the minimum number of coins needed to change the input value
(an integer) into coins with denominations 1, 5, and 10.

Input Format. The input consists of a single integer 𝑚.
Constraints. 1 ≤ 𝑚 ≤ 103.

Output Format. Output the minimum number of coins with denominations 1, 5, 10 that changes 𝑚.


2. fractionalKnapsack.js

Introduction: A thief finds much more loot than his bag can fit. Help him to find the most valuable combination
of items assuming that any fraction of a loot item can be put into his bag.

Task. The goal of this code problem is to implement an algorithm for the fractional knapsack problem.
Input Format. The first line of the input contains the number 𝑛 of items and the capacity 𝑊 of a knapsack.
The next 𝑛 lines define the values and weights of the items. The 𝑖-th line contains integers 𝑣𝑖 and 𝑤𝑖—the
value and the weight of 𝑖-th item, respectively.

Constraints. 1 ≤ 𝑛 ≤ 103, 0 ≤ 𝑊 ≤ 2 · 106; 0 ≤ 𝑣𝑖 ≤ 2 · 106, 0 < 𝑤𝑖 ≤ 2 · 106 for all 1 ≤ 𝑖 ≤ 𝑛. All the
numbers are integers.

Output Format. Output the maximal value of fractions of items that fit into the knapsack.

3. maxOnlineAd.js

Introduction: You have 𝑛 ads to place on a popular Internet page. For each ad, you know how
much is the advertiser willing to pay for one click on this ad. You have set up 𝑛
slots on your page and estimated the expected number of clicks per day for each
slot. Now, your goal is to distribute the ads among the slots to maximize the
total revenue.

Task. Given two sequences 𝑎1, 𝑎2, . . . , 𝑎𝑛 (𝑎𝑖 is the profit per click of the 𝑖-th ad) and 𝑏1, 𝑏2, . . . , 𝑏𝑛 (𝑏𝑖 is
the average number of clicks per day of the 𝑖-th slot), we need to partition them into 𝑛 pairs (𝑎𝑖, 𝑏𝑗)
such that the sum of their products is maximized.
Input Format. The first line contains an integer 𝑛, the second one contains a sequence of integers
𝑎1, 𝑎2, . . . , 𝑎𝑛, the third one contains a sequence of integers 𝑏1, 𝑏2, . . . , 𝑏𝑛.

Constraints. 1 ≤ 𝑛 ≤ 103; −105 ≤ 𝑎𝑖, 𝑏𝑖 ≤ 105 for all 1 ≤ 𝑖 ≤ 𝑛.

Output Format. Output the maximum value.


4. collectSignatures.js

Introduction: You are responsible for collecting signatures from all tenants of a certain building.
For each tenant, you know a period of time when he or she is at home.
You would like to collect all signatures by visiting the building as few times as
possible.
The mathematical model for this problem is the following. You are given a set
of segments on a line and your goal is to mark as few points on a line as possible
so that each segment contains at least one marked point.

Task. Given a set of 𝑛 segments {[𝑎0, 𝑏0], [𝑎1, 𝑏1], . . . , [𝑎𝑛−1, 𝑏𝑛−1]} with integer coordinates on a line, find
the minimum number 𝑚 of points such that each segment contains at least one point. That is, find a
set of integers 𝑋 of the minimum size such that for any segment [𝑎𝑖, 𝑏𝑖] there is a point 𝑥 ∈ 𝑋 such
that 𝑎𝑖 ≤ 𝑥 ≤ 𝑏𝑖.

Input Format. The first line of the input contains the number 𝑛 of segments. Each of the following 𝑛 lines
contains two integers 𝑎𝑖 and 𝑏𝑖 (separated by a space) defining the coordinates of endpoints of the 𝑖-th
segment.
Constraints. 1 ≤ 𝑛 ≤ 100; 0 ≤ 𝑎𝑖 ≤ 𝑏𝑖 ≤ 109 for all 0 ≤ 𝑖 < 𝑛.

Output Format. Output the minimum number 𝑚 of points on the first line and the integer coordinates
of 𝑚 points (separated by spaces) on the second line. You can output the points in any order. If there
are many such sets of points, you can output any set. (It is not difficult to see that there always exist
a set of points of the minimum size such that all the coordinates of the points are integers.)

5. maxPrizePlaces.js
Introduction: You are organizing a funny competition for children. As a prize fund you have 𝑛
candies. You would like to use these candies for top 𝑘 places in a competition
with a natural restriction that a higher place gets a larger number of candies.
To make as many children happy as possible, you are going to find the largest
value of 𝑘 for which it is possible.

Task. The goal of this problem is to represent a given positive integer 𝑛 as a sum of as many pairwise
distinct positive integers as possible. That is, to find the maximum 𝑘 such that 𝑛 can be written as
𝑎1 + 𝑎2 + · · · + 𝑎𝑘 where 𝑎1, . . . , 𝑎𝑘 are positive integers and 𝑎𝑖 ̸= 𝑎𝑗 for all 1 ≤ 𝑖 < 𝑗 ≤ 𝑘.

Input Format. The input consists of a single integer 𝑛.

Constraints. 1 ≤ 𝑛 ≤ 109.

Output Format. In the first line, output the maximum number 𝑘 such that 𝑛 can be represented as a sum
of 𝑘 pairwise distinct positive integers. In the second line, output 𝑘 pairwise distinct positive integers
that sum up to 𝑛 (if there are many such representations, output any of them).

6. maxSalary.js
Introduction: As the last question of a successful interview, your boss gives you a few pieces of paper
with numbers on it and asks you to compose a largest number from these numbers. The
resulting number is going to be your salary, so you are very much interested in maximizing
this number.

Task. Compose the largest number out of a set of integers.
Input Format. The first line of the input contains an integer 𝑛. The second line contains integers
𝑎1, 𝑎2, . . . , 𝑎𝑛.

Constraints. 1 ≤ 𝑛 ≤ 100; 1 ≤ 𝑎𝑖 ≤ 103 for all 1 ≤ 𝑖 ≤ 𝑛.

Output Format. Output the largest number that can be composed out of 𝑎1, 𝑎2, . . . , 𝑎𝑛.



