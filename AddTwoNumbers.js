/* 
## PROBLEM ##
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
/* SOLUTION */
// Definition for a singly-linked list node
class ListNode {
    constructor(val = 0, nxt = null) {
        this.val = val;
        this.nxt = nxt;
    }
}

function addTwoNumbers(l1, l2) {
    let head = new ListNode(0);
    let currentNode = head;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const val1 = l1 !== null ? l1.val : 0;
        const val2 = l2 !== null ? l2.val : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Calculate the carry for the nxt iteration
        const digit = sum % 10; // Calculate the current digit to be added to the new list

        currentNode.nxt = new ListNode(digit);
        currentNode = currentNode.nxt;

        if (l1 !== null) l1 = l1.nxt;
        if (l2 !== null) l2 = l2.nxt;
    }

    if (carry > 0) {
        currentNode.nxt = new ListNode(carry);
    }

    return head.nxt;
}

