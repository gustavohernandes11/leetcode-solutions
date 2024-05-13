// sergeyleschev's solution based

function searchInsert(nums: number[], target: number): number {
	let min = 0;
	let max = nums.length - 1;

	while (true) {
		const mid = Math.floor((min + max) / 2);
		const num = nums[mid];

		if (max - min <= 1) {
			if (target <= nums[min]) return min;
			else if (target <= nums[max]) return max;
			else return max + 1;
		}

		if (num > target) max = mid;
		else if (num < target) min = mid;
		else return mid;
	}
}
