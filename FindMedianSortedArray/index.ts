function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	let merged = [...nums1, ...nums2];

	merged.sort((a, b) => a - b);

	let midIndex = merged.length / 2;
	if (merged.length % 2 === 1) return merged[Math.floor(midIndex)];
	else return (merged[midIndex - 1] + merged[midIndex]) / 2;
}
