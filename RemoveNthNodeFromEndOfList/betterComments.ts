const removeNthFromEnd = (
	head: ListNode | null,
	n: number
): ListNode | null => {
	let current = head;
	let count = 0;

	// count the list length
	while (current) {
		current = current.next;
		count++;
	}

	// remove the first if n === length
	if (count === n) return head.next;

	// go to beginning
	current = head;

	// iterate until desired position
	for (let i = 0; i < count - n - 1; i++) {
		current = current.next;
	}

	// remove the nth node
	current.next = current.next.next || null;

	return head;
};
