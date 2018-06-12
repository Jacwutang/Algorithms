var oddEvenList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }

  var oddHead = head;
  var odd = head;

  var evenHead = head.next;
  var even = head.next;

  while (odd != null && odd.next != null && even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
