function threeSumClosest(nums: number[], target: number): number {
	const sorted = nums.sort((a, b) => a - b);
	let result = 0;
	let minDiff = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < sorted.length - 2; i++) {
		let left = i + 1;
		let right = sorted.length - 1;

		while (left < right) {
			let sum = sorted[i] + sorted[left] + sorted[right];
			if (sum === target) return sum;
			else if (sum < target) left++;
			else right--;

			const difference = Math.abs(sum - target);
			if (difference < minDiff) {
				result = sum;
				minDiff = difference;
			}
		}
	}

	return result;
}
