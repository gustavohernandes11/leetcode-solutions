/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let carry = 0;
	let curr = null;
	let head;

	while (l1 || l2) {
		let sum = (l1 ? l1?.val : 0) + (l2 ? l2?.val : 0) + carry;

		carry = 0;

		if (sum > 9) {
			carry = Math.trunc(sum / 10);
			sum -= 10;
		}
		if (curr === null) {
			curr = new ListNode(sum);
			head = curr;
		} else {
			curr.next = new ListNode(sum);
			curr = curr.next;
		}

		l1 = l1?.next;
		l2 = l2?.next;
	}
	if (carry) {
		curr.next = new ListNode(carry);
	}

	return head;
}
