function isValid(s: string): boolean {
	const openBrackets = ["(", "[", "{"];
	const bracketPairs = {
		")": "(",
		"]": "[",
		"}": "{",
	};
	const stack = [];

	for (let bracket of s) {
		if (openBrackets.includes(bracket)) {
			stack.push(bracket);
		} else {
			const stackPeek = stack[stack.length - 1];
			if (bracketPairs[bracket] === stackPeek) {
				stack.pop();
			} else return false;
		}
	}

	return stack.length === 0;
}
