/* 
based on pmistry_'s solution
*/
function trap(height: number[]): number {
	let result = 0;
	let stack = new Stack();
	let i = 0;

	while (i < height.length) {
		if (stack.isEmpty() || height[i] <= height[stack.peek()]) {
			stack.push(i++);
		} else {
			let middle = stack.pop();
			if (!stack.isEmpty()) {
				let minHeight = Math.min(height[i], height[stack.peek()]);
				result += (minHeight - height[middle]) * (i - stack.peek() - 1);
			}
		}
	}

	return result;
}

class Stack {
	constructor(private stack: number[] = []) {}
	peek() {
		return this.stack[this.stack.length - 1];
	}
	push(item: number) {
		this.stack.push(item);
	}
	pop() {
		return this.stack.pop();
	}
	isEmpty() {
		return this.stack.length == 0;
	}
	size() {
		return this.stack.length;
	}
}
