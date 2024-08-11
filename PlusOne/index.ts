function plusOne(digits: number[]): number[] {
	const lastIndex = digits.length - 1;
	return increaseLeast(digits, lastIndex);
}

const increaseLeast = (digits: number[], index: number) => {
	if (digits[index] === 9) {
		digits[index] = 0;
		if (digits[index - 1]) {
			increaseLeast(digits, index - 1);
		} else {
			digits.unshift(1);
		}
	} else {
		digits[index] = ++digits[index];
	}

	return digits;
};
