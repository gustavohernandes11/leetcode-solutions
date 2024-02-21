function isValid(s: string): boolean {
	if (s.length === 1) return false;

	let inOpen = [];
	const openSymbols = ["(", "[", "{"];
	const closeSymbols = [")", "]", "}"];
	const closedPair = new Map([
		["(", ")"],
		["[", "]"],
		["{", "}"],
	]);
	let characters = s.split("");

	for (let i = 0; i < characters.length; i++) {
		if (openSymbols.includes(characters[i])) {
			inOpen.push(characters[i]);
		} else if (closeSymbols.includes(characters[i])) {
			let lastOpenValue = inOpen[inOpen.length - 1];
			if (characters[i] === closedPair.get(lastOpenValue)) {
				inOpen.pop();
				continue;
			} else {
				return false;
			}
		}
	}
	return inOpen.length === 0;
}
