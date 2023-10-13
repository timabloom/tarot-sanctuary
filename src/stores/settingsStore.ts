import { writable } from "svelte/store";

// Settings store

export const settingsStore = writable({
	animation: 1,
	inverted: 1,
	grayscale: 1,
	reverse: 10,
	turn: 2,
	fused: 1
});

type Probabilities = {
	animation: number;
	inverted: number;
	grayscale: number;
	reverse: number;
	turn: number;
	fused: number;
};

export const updateSettings = (probabilities: Probabilities): void => {
	settingsStore.set(probabilities);
	localStorage.setItem("settings", JSON.stringify(probabilities));
};

export const getSettings = (): void => {
	const savedSettings = JSON.parse(localStorage.getItem("settings") || "{}");
	if (Object.keys(savedSettings).length === 0) {
		settingsStore.set({
			animation: 1,
			inverted: 1,
			grayscale: 1,
			reverse: 10,
			turn: 2,
			fused: 1
		});
	} else {
		settingsStore.set(savedSettings);
	}
};
