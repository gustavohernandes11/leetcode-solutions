function sequentialDigits(low: number, high: number): number[] {
	let result = [];

	for (let i = 0; i <= 9; i++) {
		let digit = i;
		let nextDigit = i + 1;

		while (digit <= high && nextDigit <= 9) {
			digit = digit * 10 + nextDigit;
			if (low <= digit && digit <= high) {
				if (!result.includes(digit)) result.push(digit);
			}
			++nextDigit;
		}
	}

	return result.sort((a, b) => a - b);
}

const isSequencial = (n: number) => {
	let result = true;
	const array = Array.from(String(n), Number);
	let prev = array[0];
	for (let i = 1; i < array.length; i++) {
		if (prev + 1 === array[i]) {
			prev = array[i];
			continue;
		} else {
			result = false;
			break;
		}
	}
	return result;
};
