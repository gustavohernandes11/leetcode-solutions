function longestPalindrome(s: string): string {
	let longest = "";

	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j <= s.length; j++) {
			const currSubstring = s.substring(i, j);
			if (longest === "") {
				longest = currSubstring;
			} else if (currSubstring.length > longest.length) {
				if (isPalindrome(currSubstring)) {
					longest = currSubstring;
				}
			}
		}
	}

	return longest;
}

const isPalindrome = (s: string) => {
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] !== s[s.length - i - 1]) return false;
	}
	return true;
};
