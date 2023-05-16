<script lang="ts">
	import "./styles.css";
	import { onMount } from "svelte";
	import { initializeDarkMode, toggleDarkMode, darkModeStore } from "../stores/darkModeStore";

	// import components
	import HamburgerMenu from "../components/HamburgerMenu.svelte";

	onMount(() => {
		initializeDarkMode();
	});

	onMount(() => {
		window.addEventListener("scroll", updateMenuPadding);
		return () => {
			window.removeEventListener("scroll", updateMenuPadding);
		};
	});

	let menuPadding = 1.2;
	let imgWidth = 4.5;

	function updateMenuPadding() {
		if (window.scrollY > 1) {
			menuPadding = 0;
			imgWidth = 3;
		} else {
			menuPadding = 1.2;
			imgWidth = 4.5;
		}
	}
</script>

<div class="mozilla-navbar-background" />

<div class="navbar-container">
	<div>
		<a id="nav-logo" class="nav-menu-buttons" href="/">Tarot Sanctuary</a>
	</div>

	<nav class="nav-menu-container">
		<ul style="padding-top: {menuPadding}em; padding-bottom: {menuPadding}em;">
			<li><a class="nav-menu-buttons" href="/">Home</a></li>
			<li><a class="nav-menu-buttons" href="/guidance">Guidance</a></li>
			<li><a class="nav-menu-buttons" href="/decks">Decks</a></li>
			<li><a class="nav-menu-buttons" href="/readings">Readings</a></li>
			<li><a class="nav-menu-buttons" href="/settings">Settings</a></li>
			<li><a class="nav-menu-buttons" href="/about">About</a></li>
		</ul>
	</nav>

	<div class="theme-container">
		<button class="nav-menu-buttons theme-toggle-button" on:click={toggleDarkMode}
			>{!$darkModeStore ? "Dark Mode" : "Light Mode"}</button
		>
		<button class="theme-img-container" on:click={toggleDarkMode}>
			<img
				style="width: {imgWidth}em;"
				alt="Website theme toggle"
				src={!$darkModeStore ? "/theme-dark-moon.svg" : "/theme-light-sun.svg"}
			/></button
		>
	</div>
</div>

<div class="hamburger-menu">
	<HamburgerMenu />
</div>

<div class="wrapper">
	<slot />

	<footer>
		<div class="footer-main-container">
			<a href="/about"> <img alt="Tarot Sanctuary logo" src="/logo-light.svg" /></a>
			<p>A safe space to explore the Tarot</p>
		</div>

		<section class="footer-license-section">
			<div class="footer-link-container">
				<p>Copyright © 2023 Tarot Sanctuary</p>
			</div>
			<div class="footer-link-container">
				<p class="footer-text">
					This work is licensed under a
					<a
						class="footer-link"
						rel="license"
						href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
						>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a
					>.
				</p>
				<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					><img
						class="footer-cc-image"
						alt="Creative Commons License link"
						style="border-width:0"
						src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
					/></a
				>
			</div>
			<div class="footer-link-container">
				<p class="footer-text">
					The source code for this website can be found on <a
						class="footer-link"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/timabloom/tarot-sanctuary">GitHub</a
					>.
				</p>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/timabloom/tarot-sanctuary"
					><img
						class="footer-github-image"
						alt="Guthub project integration link"
						src="/github-mark.svg"
					/></a
				>
			</div>
		</section>
	</footer>
</div>

<style>
	.mozilla-navbar-background {
		position: absolute;
		top: 0;
		z-index: 1;
		width: 100%;
		height: 30px;
		background-color: var(--main-bg-color-light);
	}

	.navbar-container {
		position: sticky;
		top: 0;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--main-bg-color-light);
		padding: 0 3em;
		color: #f1f1f1;
	}
	#nav-logo {
		font-weight: normal;
		font-size: 1.5rem;
		font-family: "Cinzel", serif;
	}
	.nav-menu-container {
		padding: 0;
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
		padding-left: 0;
	}
	li {
		list-style: none;
		margin: 1em;
	}
	.theme-container {
		display: flex;
		align-items: center;
		padding-left: 1em;
	}
	.theme-toggle-button {
		background: none;
		border: none;
		font-size: 1.125rem;
		font-family: "Cinzel", serif;
		cursor: pointer;
		min-width: 7em;
	}
	.theme-img-container {
		background: none;
		border: none;
		cursor: pointer;
	}
	.theme-img-container {
		background: none;
		border: none;
		cursor: pointer;
	}
	img:hover {
		cursor: pointer;
	}

	.hamburger-menu {
		display: none;
		position: sticky;
		top: 0;
		z-index: 2;
		background-color: var(--main-bg-color-light);
		color: #f1f1f1;
		padding: 0;
	}
	@media screen and (max-width: 1200px) {
		.hamburger-menu {
			display: block;
		}
		.navbar-container {
			display: none;
		}
	}

	.wrapper {
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100vh;
	}

	footer {
		background-color: var(--main-bg-color-dark);
		color: #f1f1f1;
	}
	.footer-main-container {
		padding-top: 2.4em;
		padding-bottom: 0.8em;
		margin: 0 3em 0 3em;
		border-bottom: 2px solid var(--main-accent-color);
		border-radius: 2px;
	}
	.footer-license-section {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		margin: 0 4em;
	}
	.footer-link-container {
		display: flex;
		align-items: center;
	}
	.footer-link {
		text-decoration: none;
		color: inherit;
		text-decoration: underline;
	}
	.footer-link:hover {
		text-decoration: none;
	}
	.footer-cc-image {
		margin-left: 0.2em;
	}
	.footer-github-image {
		filter: brightness(0) invert(1);
		margin-left: 0.1em;
		height: 24px;
	}
	@media screen and (max-width: 1570px) {
		.footer-license-section {
			justify-content: flex-start;
		}
		.footer-text {
			display: none;
		}
		.footer-cc-image {
			margin-top: 0.3em;
			margin-left: 0.5em;
		}
		.footer-github-image {
			margin-left: 0.5em;
		}
	}
</style>
