function reverse(x: number): number {
	// fake range in javascript
	const MIN_INT = -Math.pow(2, 31);
	const MAX_INT = Math.pow(2, 31) - 1;

	let newStr = x > 0 ? "" : "-";
	let chars = x.toString().split("");

	if (x < 0) {
		chars.shift(); // remove the -
	}

	for (let i = chars.length - 1; i >= 0; i--) {
		newStr += chars[i];
	}
	const reversedInt = parseInt(newStr);

	if (reversedInt > MAX_INT || reversedInt < MIN_INT) return 0;
	else return reversedInt;
}
