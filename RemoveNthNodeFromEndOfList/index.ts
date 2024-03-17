// not very optimized
const removeNthFromEnd = (
	head: ListNode | null,
	n: number
): ListNode | null => {
	let curr = head;
	let count = 0;

	if (!curr.next) return null;

	while (curr) {
		curr = curr.next;
		count++;
	}
	curr = head;

	if (count === n) return head.next;

	for (let i = 0; i < count - n - 1; i++) {
		curr = curr.next;
	}
	curr.next = curr.next.next || null;

	return head;
};
