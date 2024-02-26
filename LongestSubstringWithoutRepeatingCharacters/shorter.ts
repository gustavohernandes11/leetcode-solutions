// based on saifhesham's solution

function lengthOfLongestSubstring(s: string): number {
	let i = 0,
		j = 0,
		max = 0;
	let substrings = new Set();

	while (j < s.length) {
		if (!substrings.has(s[j])) {
			substrings.add(s[j++]);
			max = Math.max(max, substrings.size);
		} else substrings.delete(s[i++]);
	}
	return max;
}
