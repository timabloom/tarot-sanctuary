<script lang="ts">
	import "./styles.css";
	import { onMount } from "svelte";

	// import stores
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
	let themeFont = 1.5;
	let logoFont = 2;
	let menuFont = 1.5;

	function updateMenuPadding() {
		if (window.scrollY > 1) {
			menuPadding = 0;
			imgWidth = 2;
			themeFont = 1.125;
			logoFont = 1.5;
			menuFont = 1.125;
		} else {
			menuPadding = 1.2;
			imgWidth = 4.5;
			themeFont = 1.5;
			logoFont = 2;
			menuFont = 1.5;
		}
	}
</script>

<div class="mozilla-navbar-background" />

<div class="navbar-container">
	<div>
		<a class="nav-logo nav-menu-buttons" style="font-size: {logoFont}rem;" href="/"
			>Tarot Sanctuary</a
		>
	</div>

	<nav class="nav-menu-container">
		<ul class="menu-ul" style="padding-top: {menuPadding}em; padding-bottom: {menuPadding}em;">
			<li class="menu-li">
				<a class="nav-menu-buttons" style="font-size: {menuFont}rem;" href="/">Home</a>
			</li>
			<li class="menu-li">
				<a class="nav-menu-buttons" style="font-size: {menuFont}rem;" href="/guidance">Guidance</a>
			</li>
			<li class="menu-li">
				<a class="nav-menu-buttons" style="font-size: {menuFont}rem;" href="/decks">Decks</a>
			</li>
			<li class="menu-li">
				<a class="nav-menu-buttons" style="font-size: {menuFont}rem;" href="/readings">Readings</a>
			</li>
			<li class="menu-li">
				<a class="nav-menu-buttons" style="font-size: {menuFont}rem;" href="/settings">Settings</a>
			</li>
			<li class="menu-li">
				<a class="nav-menu-buttons" style="font-size: {menuFont}rem;" href="/about">About</a>
			</li>
		</ul>
	</nav>

	<div class="theme-container">
		<div class="theme-toggle-button-container" style="font-size: {themeFont}rem;">
			<button
				class="nav-menu-buttons theme-toggle-button"
				style="font-size: {themeFont}rem;"
				on:click={toggleDarkMode}>{!$darkModeStore ? "Dark Mode" : "Light Mode"}</button
			>
		</div>
		<button class="theme-img-button" on:click={toggleDarkMode}>
			<img
				style="width: {imgWidth}rem;"
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
		<div class="footer-container">
			<div class="footer-logo-container">
				<a href="/about"><img alt="Tarot Sanctuary logo" src="/logo-light.svg" /></a>
				<p>A new fun way to explore the Tarot</p>
			</div>

			<div class="footer-attributions-container">
				<h2 class="footer-h2">Tarot Deck Attributions:</h2>
				<ul>
					<li>
						<p class="footer-attribution footer">
							CBD Tarot de Marseille by Dr. Yoav Ben-Dov,
							<a class="footer-attribution footer-link" href="http://cbdtarot.com"
								>www.cbdtarot.com</a
							>
						</p>
					</li>
					<li>
						<a class="footer-attribution footer-link" href="/attributions"
							>Enhanced Rider-Waite Tarot by Timothy Magee</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="footer-license-section">
			<div class="footer-link-container">
				<p>Copyright © 2023 Tarot Sanctuary</p>
			</div>
			<div class="footer-link-container">
				<p class="footer-text">
					Except where otherwise noted, content on this site is licensed under 
					<a
						class="footer-link"
						rel="license"
						href="https://creativecommons.org/licenses/by-sa/4.0/"
						>CC BY-SA 4.0</a
					>
				</p>
				<div class="footer-cc-image-container">
					<a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/"
						><img
							class="footer-cc-image"
							alt="Creative Commons License link"
							style="border-width:0"
							src="https://licensebuttons.net/l/by-sa/4.0/80x15.png"
						/></a
					>
				</div>
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
				<div class="footer-github-image-container">
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
			</div>
		</div>
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
	.nav-logo {
		font-weight: normal;
		font-family: "Cinzel", serif;
	}
	.nav-menu-container {
		padding: 0;
		padding-right: 3.5em;
	}
	.nav-menu-buttons {
		text-decoration: none;
		color: inherit;
	}
	.nav-menu-buttons:hover {
		color: var(--secondary-accent-color);
	}

	ul {
		padding-left: 0;
	}

	li {
		list-style: none;
	}

	.menu-ul {
		display: flex;
		justify-content: center;
		margin: 0;
	}

	.menu-li {
		margin: 1em;
	}

	.theme-container {
		display: flex;
		align-items: center;
	}
	.theme-toggle-button-container {
		text-align: center;
		width: 7.5em;
		padding-top: 0.2em;
	}
	.theme-toggle-button {
		background: none;
		border: none;
		font-family: "Cinzel", serif;
		cursor: pointer;
		padding: 0;
	}
	.theme-img-button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}
	.theme-img-button img {
		display: block;
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
	.wrapper {
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100vh;
	}

	footer {
		background-color: var(--main-bg-color-dark);
		color: #f1f1f1;
	}

	.footer-container {
		display: flex;
	}

	.footer-logo-container {
		padding-top: 2.4em;
		padding-bottom: 0.8em;
		margin: 0 3em 0 3em;
	}

	.footer-logo-container a {
		display: inline-block;
		width: fit-content;
	}

	.footer-logo-container img {
		display: block;
	}

	.footer-attributions-container {
		margin: 2.4em 1em 0 1em;
	}

	.footer-h2 {
		margin: 0;
		font-size: 1.125rem;
	}

	.footer-attribution {
		font-size: 0.875rem;
		margin: 1em 0;
	}

	.footer-license-section {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		margin: 0 3.8em;
		border-top: 2px solid var(--main-accent-color);
		border-radius: 2px;
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

	.footer-cc-image-container {
		margin-left: 0.2em;
	}

	.footer-cc-image {
		display: block;
	}

	.footer-github-image-container {
		margin-left: 0.1em;
		margin-bottom: 0.3em;
	}
	.footer-github-image {
		display: block;
		filter: brightness(0) invert(1);
		height: 24px;
	}
	@media screen and (max-width: 1500px) {
		.hamburger-menu {
			display: block;
		}
		.navbar-container {
			display: none;
		}
		.footer-license-section {
			justify-content: flex-start;
		}
		.footer-text {
			display: none;
		}
		.footer-cc-image {
			margin-left: 0.5em;
		}
		.footer-github-image {
			margin-left: 0.5em;
		}
	}
</style>
