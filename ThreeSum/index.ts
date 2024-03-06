function threeSum(nums: number[]): number[][] {
	let combinations: [number, number, number][] = [];
	nums = nums.sort((a, b) => a - b);

	for (const i of nums.keys()) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			if (sum > 0) right--;
			else if (sum < 0) left++;
			else {
				while (left < right && nums[left] === nums[left + 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right - 1]) {
					right--;
				}

				combinations.push([nums[i], nums[left], nums[right]]);
				left++;
			}
		}
	}

	return combinations;
}
