function isPalindrome(x: number): boolean {
	const digits = Array.from(String(x), String);
	const reverse = [...digits].reverse();

	return digits.join("") === reverse.join("");
}
