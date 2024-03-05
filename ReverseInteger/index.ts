// not very optimazed
function reverse(x: number): number {
	let array = x.toString().split("");
	array = array.reverse();

	if (x < 0) {
		array.pop();
		array.unshift("-");
	}
	const result = parseInt(array.join(""), 10);
	if (result > 2147483647 || result < -2147483648) return 0;
	else return result;
}
