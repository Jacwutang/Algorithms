// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var addTwoNumbers = function(l1, l2) {
  let sum = 0, carry = 0, x = 0, y = 0;
  let a = l1;
  let b = l2;

  let dummy = new ListNode(0);
  let current = dummy;

  while (a !== null || b !== null) {
    x = (a !== null)? a.val : 0;
    y = (b !== null)? b.val : 0;

    sum = x + y + carry;

    carry = Math.floor(sum / 10);

    let newNode = new ListNode(sum % 10);
    current.next = newNode;
    current = current.next;

    if (a !== null) {
        a = a.next;
    }
    if (b !== null) {
        b = b.next;
    }

  }

   if (carry > 0){
       current.next = new ListNode(carry);
   }

   return dummy.next;

};
