function intToRoman(num: number): string {
	let result = [];
	const decomposition = decomposeNumber(num);

	for (let i = 0; i < decomposition.length; i++) {
		result[i] = "";
		let rest = +decomposition[i];

		while (rest > 0) {
			if (toRoman.hasOwnProperty(rest)) {
				result[i] += toRoman[rest];
				rest -= rest;
			} else {
				if (rest >= 1000) {
					result[i] += toRoman[1000];
					rest -= 1000;
				} else if (rest >= 500) {
					result[i] += toRoman[500];
					rest -= 500;
				} else if (rest >= 100) {
					result[i] += toRoman[100];
					rest -= 100;
				} else if (rest >= 50) {
					result[i] += toRoman[50];
					rest -= 50;
				} else if (rest >= 10) {
					result[i] += toRoman[10];
					rest -= 10;
				} else if (rest >= 5) {
					result[i] += toRoman[5];
					rest -= 5;
				} else if (rest >= 1) {
					result[i] += toRoman[1];
					rest -= 1;
				}
			}
		}
	}

	return result.join("");
}

const decomposeNumber = (num: number): string[] => {
	const chars = num.toString();
	let decomposition = [];
	for (let i = 0; i < chars.length; i++) {
		let number = Number(chars[i] + "0".repeat(chars.length - 1 - i));
		decomposition.push(number);
	}
	return decomposition;
};

const toRoman = {
	1: "I",
	4: "IV",
	5: "V",
	9: "IX",
	10: "X",
	40: "XL",
	50: "L",
	90: "XC",
	100: "C",
	400: "CD",
	500: "D",
	900: "CM",
	1000: "M",
};
