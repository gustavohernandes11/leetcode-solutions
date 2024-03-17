const removeNthFromEnd = (
	head: ListNode | null,
	n: number
): ListNode | null => {
	return removeNode(head, n) === n ? head.next : head;
};

const removeNode = (node: ListNode | null, n: number) => {
	if (!node) return 0;
	let count = removeNode(node.next, n);

	if (count === n) {
		node.next = node.next.next;
	}
	return count + 1;
};
