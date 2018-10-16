// Given a singly linked list, determine if it is a palindrome.
//
// Example 1:
//
// Input: 1->2
// Output: false
// Example 2:
//
// Input: 1->2->2->1
// Output: true

var isPalindrome = function(head) {
    if(head instanceof ListNode != true){
        return true;
    }
    let tail = head, reset = head;
    let steps = 0, stepDec = 0;
    while(tail.next != null){
        tail = tail.next;
        steps += 1;
    }

    stepDec = steps;

    for(let i = 0; i <= Math.floor(steps / 2); i++){

        if(tail.val !== head.val){
            return false;
        }

        head = head.next;
        stepDec -= 1;
        tail = reset;
        for(let j = 0; j < stepDec; j++){
            tail = tail.next;
        }
    }

    return true;
};
