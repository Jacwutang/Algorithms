// Given a binary tree, determine if it is a valid binary search tree (BST).
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//
// Input:
//     2
//    / \
//   1   3
// Output: true
//
// 5
// / \
// 1   4
//  / \
// 3   6
// Output: false
// Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
//          is 5 but its right child's value is 4.

var isValidBST = function(root) {
   if(!root){
       return true;
   }
   let left = traverse(root.left, Number.MIN_SAFE_INTEGER, root.val);
   let right = traverse(root.right, root.val, Number.MAX_SAFE_INTEGER);

   if(left && right){
       return true;
   } else{
       return false;
   }
};

function traverse(root, min, max){
    if(root == null) return true;

    if(root.val <= min || root.val >= max){
       return false;
    }

    return traverse(root.left,min,root.val) && traverse(root.right,root.val,max);

}
