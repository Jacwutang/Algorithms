Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Input: [2,1,0,1,2]
Output: 3


var trap = function(height) {
    let stack = [];
    let water = 0;
    let i = 0;

    while(i < height.length) {
        if (stack.length == 0 || height[i] <= height[stack.slice(-1)]) {
            stack.push(i);
            i += 1;

        }
        else {
            let low = stack.pop();

            if (stack.length > 0) {
                let leftWall = height[stack.slice(-1)];
                let minWall = Math.min(height[i], leftWall);
                let distance = i - stack.slice(-1) - 1;

                water += (distance * (minWall - height[low]) );
            }
        }
    }

    return water;

};
