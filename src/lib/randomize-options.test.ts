import { describe, it, expect } from "vitest";
import { setOptions } from "./randomize-card-functions";

describe("setOptions", () => {
	it("should activate reverse 50% of the time when it is the only option selected", () => {
		let reverseCount = 0;
		const trials = 100000;

		for (let i = 0; i < trials; i++) {
			const result = setOptions({
				animation: 0,
				inverted: 0,
				grayscale: 0,
				reverse: 1,
				turn: 0,
				fused: 0
			});
			if (result.reverse) {
				reverseCount++;
			}
		}

		const percentage = (reverseCount / trials) * 100;
		expect(percentage).toBeGreaterThanOrEqual(49);
		expect(percentage).toBeLessThanOrEqual(51);
	});
});

describe("setOptions", () => {
	it("should activate reverse 10% of the time when it is the only option selected", () => {
		let reverseCount = 0;
		const trials = 100000;

		for (let i = 0; i < trials; i++) {
			const result = setOptions({
				animation: 0,
				inverted: 0,
				grayscale: 0,
				reverse: 0.1,
				turn: 0,
				fused: 0
			});
			if (result.reverse) {
				reverseCount++;
			}
		}

		const percentage = (reverseCount / trials) * 100;
		expect(percentage).toBeGreaterThanOrEqual(9);
		expect(percentage).toBeLessThanOrEqual(11);
	});
});

describe("setOptions", () => {
	it("should activate reverse 45% and turn 5% of the time in combination with the turn option selected", () => {
		let reverseCount = 0;
		let turnCount = 0;
		const trials = 100000;

		for (let i = 0; i < trials; i++) {
			const result = setOptions({
				animation: 0,
				inverted: 0,
				grayscale: 0,
				reverse: 1,
				turn: 0.1,
				fused: 0
			});
			if (result.reverse) {
				reverseCount++;
			}
			if (result.turn) {
				turnCount++;
			}
		}

		const percentageReverse = (reverseCount / trials) * 100;
		expect(percentageReverse).toBeGreaterThanOrEqual(44);
		expect(percentageReverse).toBeLessThanOrEqual(46);

		const percentageTurn = (turnCount / trials) * 100;
		expect(percentageTurn).toBeGreaterThanOrEqual(4);
		expect(percentageTurn).toBeLessThanOrEqual(6);
	});
});
