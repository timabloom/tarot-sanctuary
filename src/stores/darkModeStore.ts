import { writable, get } from "svelte/store";

// Theme Mode store

export const darkModeStore = writable(false);

export const toggleDarkMode = (): void => {
	darkModeStore.update((value) => !value);
	localStorage.setItem("darkMode", JSON.stringify(get(darkModeStore)));
	document.body.classList.toggle("dark-mode");
};

export const initializeDarkMode = (): void => {
	const savedDarkMode: boolean = JSON.parse(localStorage.getItem("darkMode") || "false");
	if (savedDarkMode) {
		darkModeStore.set(savedDarkMode);
		document.body.classList.add("dark-mode");
	}

	document.documentElement.style.setProperty("--root-hidden", "none");
};
