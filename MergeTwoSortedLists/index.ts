function mergeTwoLists(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	const head = new ListNode();
	let current = head;

	if (!l1) return l2;
	if (!l2) return l1;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			current.next = l1;
			l1 = l1.next;
		} else {
			current.next = l2;
			l2 = l2.next;
		}
		current = current.next;
	}
	current.next = l1 || l2;
	return head.next;
}
