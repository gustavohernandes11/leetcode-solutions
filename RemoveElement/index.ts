function removeElement(nums: number[], val: number): number {
	let countValid = nums.length - nums.filter((x) => x === val).length;
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			if (nums[j] === val) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
	}
	return countValid;
}
