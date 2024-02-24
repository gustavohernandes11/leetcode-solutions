function longestCommonPrefix(strs: string[]): string {
	let sorted = strs.sort();
	let first = sorted[0];
	let last = sorted[sorted.length - 1];
	let common = [];

	for (let i = 0; i < first.length; i++) {
		if (first[i] === last[i]) {
			common.push(first[i]);
		} else {
			break;
		}
	}

	return common.join("");
}
