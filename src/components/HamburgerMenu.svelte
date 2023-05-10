<script lang="ts">
	import { onMount } from "svelte";
	import { get, writable } from "svelte/store";
	import { initializeDarkMode, toggleDarkMode, darkModeStore } from "../stores/darkModeStore.js";

	onMount(() => {
		initializeDarkMode();
	});

	onMount(() => {
		window.addEventListener("scroll", updateMenuPadding);
		return () => {
			window.removeEventListener("scroll", updateMenuPadding);
		};
	});

	const menuPadding = writable(1.5);

	function updateMenuPadding() {
		if (window.scrollY > 1) {
			menuPadding.set(0.5);
		} else {
			menuPadding.set(1.5);
		}
	}

	let menuOpen = false;

	function toggleMenu(): void {
		menuOpen = !menuOpen;
	}
	function handleKeyPress(event: KeyboardEvent): void {
		if (event.key === "enter" || event.key === "space") {
			toggleMenu();
		}
	}
	function closeModalClick(): void {
		menuOpen = false;
	}
	function closeModalKeyPress(event: KeyboardEvent): void {
		if (event.key === "enter" || event.key === "space") {
			menuOpen = false;
		}
	}

	let bar1T = false;
	let bar2T = false;
	let bar3T = false;

	function barTransform() {
		bar1T = !bar1T;
		bar2T = !bar2T;
		bar3T = !bar3T;
	}
</script>

<div class="nav-top" style="padding-top: {$menuPadding}em; padding-bottom: {$menuPadding}em;">
	<div>
		<a id="nav-logo" class="nav-menu-buttons" href="/">Tarot Sanctuary</a>
	</div>

	<button
		class="hamburger-menu-toggle"
		on:click={barTransform}
		on:click={toggleMenu}
		on:keypress={handleKeyPress}
	>
		<div class="bar1" class:bar1T />
		<div class="bar2" class:bar2T />
		<div class="bar3" class:bar3T />
	</button>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav
	class="nav-menu-items"
	on:click={barTransform}
	on:click={closeModalClick}
	style="display: {menuOpen ? 'block' : 'none'}"
>
	<ul>
		<li>
			<a
				class="nav-menu-buttons"
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
				href="/">Home</a
			>
		</li>
		<li>
			<a
				class="nav-menu-buttons"
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
				href="/guidance">Guidance</a
			>
		</li>
		<li>
			<a
				class="nav-menu-buttons"
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
				href="/decks">Decks</a
			>
		</li>
		<li>
			<a
				class="nav-menu-buttons"
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
				href="/readings">Readings</a
			>
		</li>
		<li>
			<a
				class="nav-menu-buttons"
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
				href="/settings">Settings</a
			>
		</li>
		<li>
			<a
				class="nav-menu-buttons"
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
				href="/about">About</a
			>
		</li>
		<li>
			<button
				class="theme-toggle-button"
				on:click={toggleDarkMode}
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
			>
				{!$darkModeStore ? "Dark Mode" : "Light Mode"}
			</button>
		</li>
	</ul>
</nav>

<style>
	.nav-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 1em;
		padding-right: 1em;
	}
	#nav-logo {
		font-weight: normal;
		font-size: 1.5rem;
		font-family: "Cinzel", serif;
	}
	.nav-menu-buttons {
		text-decoration: none;
		font-size: 1.125rem;
	}
	.nav-menu-buttons:hover {
		color: var(--secondary-accent-color);
	}

	.hamburger-menu-toggle {
		border: none;
		margin: 0;
		padding: 0;
		background: none;
		cursor: pointer;
	}
	.bar1,
	.bar2,
	.bar3 {
		width: 40px;
		height: 2px;
		background-color: #ffffff;
		margin: 10px 0;
		transition: 0.4s;
	}
	.bar1T {
		transform: translateY(12px) rotate(-45deg);
	}
	.bar2T {
		transform: scaleX(0);
		opacity: 0;
	}
	.bar3T {
		transform: translateY(-12px) rotate(45deg);
	}

	.nav-menu-items {
		display: flex;
		flex-direction: column;
		z-index: 1;
		position: absolute;
		width: 100%;
		background: var(--main-bg-color-dark);
		border-top: var(--main-accent-color) 2px solid;
	}
	.nav-menu-items ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style-type: none;
	}
	.nav-menu-buttons {
		text-decoration: none;
		color: inherit;
		font-size: 1.125rem;
	}
	.nav-menu-buttons:hover {
		color: var(--secondary-accent-color);
	}
	ul {
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 1em;
	}
	li {
		list-style: none;
		margin: 1em;
	}
	.theme-toggle-button {
		background: none;
		border: none;
		font-size: 1.125rem;
		font-family: inherit;
		color: inherit;
		cursor: pointer;
		padding: 0;
		text-align: left;
	}
	.theme-toggle-button:hover {
		color: var(--secondary-accent-color);
	}
</style>
