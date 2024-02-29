function letterCombinations(digits: string): string[] {
	if (digits.length === 0) return [];

	const digitToLetters: { [key: string]: string[] } = {
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"],
	};

	const combinations: string[] = [];

	const backtrack = (index: number, currentCombination: string) => {
		if (index === digits.length) {
			combinations.push(currentCombination);
			return;
		}

		const digit = digits[index];
		const letters = digitToLetters[digit];

		for (const letter of letters) {
			backtrack(index + 1, currentCombination + letter);
		}
	};

	backtrack(0, "");

	return combinations;
}
