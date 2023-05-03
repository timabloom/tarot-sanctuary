<script lang="ts">
	import "./styles.css";
</script>

<nav>
	<div>
		<a id="nav-logo" class="nav-menu-buttons" href="/">Tarot Sanctuary</a>
	</div>
	<nav>
		<ul>
			<li><a class="nav-menu-buttons" href="/">Home</a></li>
			<li><a class="nav-menu-buttons" href="/guidance">Guidance</a></li>
			<li><a class="nav-menu-buttons" href="/decks">Decks</a></li>
			<li><a class="nav-menu-buttons" href="/readings">Readings</a></li>
			<li><a class="nav-menu-buttons" href="/settings">Settings</a></li>
			<li><a class="nav-menu-buttons" href="/about">About</a></li>
		</ul>
	</nav>
	<div class="nav-theme-container">
		<p class="nav-menu-buttons">Dark Mode</p>
		<img alt="Dark mode toggle" src="/dark-mode-moon.svg" />
	</div>
</nav>

<div><slot /></div>

<footer>
	<div class="footer-main-container">
		<a href="/about">
			<img alt="Tarot Sanctuary logo" src="/logo-light.svg" /></a>
		<p>Open and free for all</p>
	</div>
	<section class="footer-license-section">
		<div class="footer-link-container">
			<p>Copyright © 2023 Tarot Sanctuary</p>
		</div>
		<div class="footer-link-container">
			<p>
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
			<p>
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

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--main-bg-color-light);
		padding: 0 3em 0 3em;
		color: white;
	}
	#nav-logo {
		font-weight: normal;
		font-size: 1.5rem;
		font-family: "Cinzel", serif;
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
	.nav-theme-container {
		display: flex;
		align-items: center;
		font-size: 1.125rem;
		font-family: "Cinzel", serif;
		padding-left: 3.8em;
	}
	.nav-theme-container p:hover {
		color: var(--secondary-accent-color);
	}
	.nav-theme-container p:hover,
	img:hover {
		cursor: pointer;
	}
	.nav-theme-container img {
		margin-left: 0.5em;
		padding-bottom: 0.5em;
	}

	footer {
		background-color: var(--main-bg-color-dark);
		color: white;
	}
	.footer-main-container {
		padding-top: 2.4em ;
		padding-bottom: 0.8em;
		margin: 0 3em 0 3em;
		border-bottom: 2px solid var(--main-accent-color);
		border-radius: 2px;
	}
	.footer-license-section {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		margin-left: 3.43em;
		margin-right: 3.43em;
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
</style>
