<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

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
</script>

<div class="nav-top" style="padding-top: {$menuPadding}em; padding-bottom: {$menuPadding}em;">
	<div>
		<a id="nav-logo" class="nav-menu-buttons" href="/">Tarot Sanctuary</a>
	</div>

	<button class="nav-menu-toggle" on:click={toggleMenu} on:keypress={handleKeyPress} />
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="nav-menu-items"
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
				on:click={closeModalClick}
				on:keypress={closeModalKeyPress}
			>
				Dark Mode
			</button>
		</li>
	</ul>
</div>

<style>
	.nav-top {
		display: flex;
		justify-content: space-between;
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
	.nav-menu-toggle {
		padding: 1em;
		cursor: pointer;
		border: none;
		border-radius: 5%;
	}
	.nav-menu-toggle:hover {
		background: var(--secondary-accent-color);
	}
	.nav-menu-items {
		display: flex;
		flex-direction: column;
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
