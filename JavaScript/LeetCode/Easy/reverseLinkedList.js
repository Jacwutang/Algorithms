// function ListNode(val) {
//      this.val = val;
//     this.next = null;
// }

var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

var reverseList = function(head, newHead = null) {
  if (head === null) return newHead;
  next = head.next;
  head.next = newHead;
  return reverseList(next, head);
};
