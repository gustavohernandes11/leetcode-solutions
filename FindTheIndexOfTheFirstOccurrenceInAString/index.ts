function strStr(haystack: string, needle: string): number {
	const haystackLength = haystack.length;
	const needleLength = needle.length;

	if (haystackLength < needleLength) return -1;
	for (let i = 0; i <= haystackLength - needleLength; i++) {
		let j = 0;
		while (j < needleLength && haystack[i + j] === needle[j]) {
			j++;
		}
		if (j === needle.length) return i;
	}
	return -1;
}
