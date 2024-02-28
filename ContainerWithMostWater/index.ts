function maxArea(height: number[]): number {
	let i = 0;
	let j = height.length - 1;
	let capacity = 0;

	while (i <= j) {
		let currentCapacity = Math.min(height[j], height[i]) * (j - i);

		if (currentCapacity > capacity) {
			capacity = currentCapacity;
		}

		if (height[i] >= height[j]) {
			j--;
		} else {
			i++;
		}
	}
	return capacity;
}
