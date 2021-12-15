/*Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].*/

import math
def snail(array):
    if array == [[]]:return []
    if len(array) == 1:return [array[0][0]]
    start = [(i,i)for i in range(math.ceil(len(array)/2))]
    count = 0
    times = 0
    trace = []
    while len(array)//2 - times > 0:
        for i,j in [(0,1),(1,0),(0,-1),(-1,0)]:
            if count % 4 == 0:
                a,b = start[count//4]
                trace += [array[a][b]]
            for _ in range(len(array)-1-2*times):
                a,b = a+i,b+j
                trace.append(array[a][b])
            count += 1
        times += 1
        trace.pop()
    if len(array)&1 == 1:
        a,b = start[len(array)//2]
        return trace+[array[a][b]]
    return trace