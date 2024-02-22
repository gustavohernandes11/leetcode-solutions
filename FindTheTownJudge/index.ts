// inspired by dandv's solution
function findJudge(n: number, trust: number[][]): number {
	let trustedBy = Array(n + 1).fill(0);
	trust.forEach(([person, t]) => {
		trustedBy[person] = NaN;
		trustedBy[t]++;
	});
	return trustedBy.indexOf(n - 1) || 1;
}
