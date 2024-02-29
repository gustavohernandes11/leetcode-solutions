function letterCombinations(digits: string): string[] {
	if (!digits) return [];

	let result = mapped[digits[0]];

	for (let i = 1; i < digits.length; i++) {
		result = combineDigits(result, mapped[digits[i]]);
	}
	return result;
}
const combineDigits = (arr1: string[], arr2: string[]) => {
	let combination = [];
	for (let a1 of arr1) {
		for (let a2 of arr2) {
			combination.push(a1 + a2);
		}
	}
	return combination;
};
const mapped = {
	2: ["a", "b", "c"],
	3: ["d", "e", "f"],
	4: ["g", "h", "i"],
	5: ["j", "k", "l"],
	6: ["m", "n", "o"],
	7: ["p", "q", "r", "s"],
	8: ["t", "u", "v"],
	9: ["w", "x", "y", "z"],
};
