function lengthOfLongestSubstring(s: string): number {
	let longest = 0;
	let currentSubstring = "";

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		const charIndex = currentSubstring.indexOf(char);

		if (charIndex !== -1) {
			longest = Math.max(longest, currentSubstring.length);
			currentSubstring = currentSubstring.slice(charIndex + 1) + char;
		} else {
			currentSubstring += char;
		}
	}

	return Math.max(longest, currentSubstring.length);
}
