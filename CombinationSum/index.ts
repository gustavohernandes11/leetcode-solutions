// based on carti's solution

function combinationSum(candidates: number[], target: number): number[][] {
	const res: number[][] = [];

	function dfs(path: number[], sum: number, last: number): void {
		if (sum === target) {
			res.push(path);
			return;
		}

		if (sum > target) return;

		for (let i = last; i < candidates.length; i++) {
			if (sum + candidates[i] <= target) {
				dfs([...path, candidates[i]], sum + candidates[i], i);
			}
		}
	}

	candidates.sort((a, b) => a - b);
	dfs([], 0, 0);
	return res;
}
