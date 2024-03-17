const generateParenthesis = (n: number): string[] => {
	let combinations = [];

	const combineRecursively = (
		open: number,
		closed: number,
		current: string
	) => {
		if (current.length === n * 2) combinations.push(current);

		if (open > closed) combineRecursively(open, closed + 1, current + ")");
		if (open < n) combineRecursively(open + 1, closed, current + "(");
	};

	combineRecursively(0, 0, "");
	return combinations;
};
