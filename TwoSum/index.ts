function twoSum(nums: number[], target: number): number[] {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			if (nums[i] + nums[j] === target && i !== j) {
				return (result = [i, j]);
			}
		}
		if (result.length !== 0) break;
	}
	return result;
}
