// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


var levelOrder = function(root) {
    let queue = [], tmp = [], result = [], length = 0, count = 0, node = null, reset = true;
    if(root instanceof TreeNode != true){
       return result;
    }


    queue.push(root);
    while(queue.length > 0){
        if(reset){
            length = queue.length;
            reset = false;
        }

        node = queue.shift();
        count += 1;
        tmp.push(node.val);

        if(count == length){
            result.push(tmp);
            tmp = [];
            count = 0;
            reset = true;
        }

        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }

    return result;
};
