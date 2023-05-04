<script></script>

<svelte:head>
	<title>Tarot Sanctuary - Open and free for all</title>
</svelte:head>

<header>
	<div>
		<h1>Welcome, dear one to the Tarot Sanctuary!</h1>
		<p>
			Before we embark on our Tarot journey together, I want to invite you to consider these three
			guiding maxims: Know thyself, Nothing in excess and Surety brings ruin. By keeping these
			principles in mind, we can approach the Tarot with love and respect, and open ourselves up to
			its deep wisdom and transformative potential. So let's take a deep breath, center ourselves,
			and embark on this beautiful journey of discovery and self-exploration together!
		</p>
	</div>
</header>

<main>
	<h2 class="main-title">The Three Well Known Delphic Maxims</h2>
	<p class="main-subtitle">Inscribed at the entrance to the Temple of Apollo</p>
	<div class="main-maxims-container">
		<div class="main-maxim-container">
			<h3 class="main-maxim">Know Thyself</h3>
			<p class="main-card-name">The Hermit</p>
			<div class="main-card-container">
				<a class="main-read-more" href="/guidance">
					<img alt="The Hermit tarot card" src="/marseille-deck/a09.jpg" /></a
				>
			</div>
			<p><a class="main-read-more" href="/guidance">Read More</a></p>
		</div>
		<div class="main-maxim-container">
			<h3 class="main-maxim">Nothing in Excess</h3>
			<p class="main-card-name">Temperance</p>
			<div class="main-card-container">
				<a class="main-read-more" href="/guidance"
					><img alt="The Temperance tarot card" src="/marseille-deck/a14.jpg" /></a
				>
			</div>
			<p><a class="main-read-more" href="/guidance">Read More</a></p>
		</div>
		<div class="main-maxim-container">
			<h3 class="main-maxim">Surety Brings Ruin</h3>
			<p class="main-card-name">The Tower</p>
			<div class="main-card-container">
				<a class="main-read-more" href="/guidance"
					><img alt="The Tower tarot card" src="/marseille-deck/a16.jpg" /></a
				>
			</div>
			<p><a class="main-read-more" href="/guidance">Read More</a></p>
		</div>
	</div>
	<div class="main-stairs-container">
		<div class="main-step-1" />
		<div class="main-step-2" />
		<div class="main-step-3" />
	</div>
</main>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--main-bg-color-dark);
		padding: 1.6em 30em 2.4em 30em;
		color: white;
		border-top: var(--main-accent-color) 2px solid;
	}
	header div {
		max-width: 50em;
	}
	.main-title {
		text-align: center;
		margin-top: 1.6em;
	}
	.main-subtitle {
		text-align: center;
		margin-bottom: 2.5em;
	}
	.main-maxims-container {
		display: flex;
		justify-content: space-evenly;
		margin: 1.6em 25em 1.6em 25em;
	}
	.main-maxim-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em 3em 2em 3em;
		height: 392px;
		background-color: var(--secondary-bg-color);
		position: relative;
	}
	.main-maxim-container::before {
		content: "";
		position: absolute;
		top: 0;
		left: -8px;
		right: -8px;
		border-top: var(--main-accent-color) 10px solid;
		border-radius: 2px;
	}
	.main-maxim {
		margin-top: 1.8em;
		margin-bottom: 0;
	}
	.main-card-name {
		margin-bottom: 0.3em;
		margin-top: 0.3em;
	}
	.main-card-container {
		width: 128px;
		height: 384px;
		overflow: hidden;
		position: relative;
		border: 2px solid black;
	}

	.main-card-container img {
		position: absolute;
		top: -4%;
		left: -6.1%;
		transform: scale(0.49);
		transform-origin: top left;
	}
	.main-read-more {
		font-family: cinzel, serif;
		font-size: 1.125rem;
		text-decoration: none;
		color: inherit;
		text-decoration: underline;
	}
	.main-read-more:hover {
		color: var(--main-accent-color);
	}
	.main-stairs-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 8em;
		margin-bottom: 4em;
	}
	.main-step-1,
	.main-step-2,
	.main-step-3 {
		background-color: var(--main-accent-color);
	}
	.main-step-1 {
		height: 3em;
		width: 50em;
		border-bottom: 1em solid #8b7148;
	}
	.main-step-2 {
		height: 4em;
		width: 54em;
		border-bottom: 1em solid #8b7148;
	}
	.main-step-3 {
		height: 5em;
		width: 58em;
	}
</style>
