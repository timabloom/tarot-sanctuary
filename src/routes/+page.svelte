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
	<h2 class="title">The Three Well Known Delphic Maxims</h2>
	<p class="subtitle">Inscribed at the entrance to the Temple of Apollo</p>
	<div class="maxims-container">
		<div class="maxim-container">
			<h3 class="maxim">Know Thyself</h3>
			<p class="card-name">The Hermit</p>
			<div class="card-container">
				<a class="read-more" href="/guidance">
					<img alt="The Hermit tarot card" src="/marseille-deck/a09.jpg" /></a
				>
			</div>
			<p><a class="read-more" href="/guidance">Read More</a></p>
		</div>
		<div class="maxim-container">
			<h3 class="maxim">Nothing in Excess</h3>
			<p class="card-name">Temperance</p>
			<div class="card-container">
				<a class="read-more" href="/guidance"
					><img alt="The Temperance tarot card" src="/marseille-deck/a14.jpg" /></a
				>
			</div>
			<p><a class="read-more" href="/guidance">Read More</a></p>
		</div>
		<div class="maxim-container">
			<h3 class="maxim">Surety Brings Ruin</h3>
			<p class="card-name">The Tower</p>
			<div class="card-container">
				<a class="read-more" href="/guidance"
					><img alt="The Tower tarot card" src="/marseille-deck/a16.jpg" /></a
				>
			</div>
			<p><a class="read-more" href="/guidance">Read More</a></p>
		</div>
	</div>
	<div class="stairs-container">
		<div class="step-1" />
		<div class="step-2" />
		<div class="step-3" />
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
	.title {
		text-align: center;
		margin-top: 1.6em;
	}
	.subtitle {
		text-align: center;
		margin-bottom: 2.5em;
	}
	.maxims-container {
		display: flex;
		justify-content: space-evenly;
		margin: 1.6em 25em 1.6em 25em;
	}
	.maxim-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em 3em 2em 3em;
		height: 392px;
		background-color: var(--secondary-bg-color);
		position: relative;
	}
	.maxim-container::before {
		content: "";
		position: absolute;
		top: 0;
		left: -8px;
		right: -8px;
		border-top: var(--main-accent-color) 10px solid;
		border-radius: 2px;
	}
	.maxim {
		margin-top: 1.8em;
		margin-bottom: 0;
	}
	.card-name {
		margin-bottom: 0.3em;
		margin-top: 0.3em;
	}
	.card-container {
		width: 128px;
		height: 384px;
		overflow: hidden;
		position: relative;
		border: 2px solid black;
	}

	.card-container img {
		position: absolute;
		top: -4%;
		left: -6.1%;
		transform: scale(0.49);
		transform-origin: top left;
	}
	.read-more {
		font-family: cinzel, serif;
		font-size: 1.125rem;
		text-decoration: none;
		color: inherit;
		text-decoration: underline;
	}
	.read-more:hover {
		color: var(--main-accent-color);
	}
	.stairs-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 8em;
		margin-bottom: 4em;
	}
	.step-1,
	.step-2,
	.step-3 {
		background-color: var(--main-accent-color);
	}
	.step-1 {
		height: 3em;
		width: 50em;
		border-bottom: 1em solid #8b7148;
	}
	.step-2 {
		height: 4em;
		width: 54em;
		border-bottom: 1em solid #8b7148;
	}
	.step-3 {
		height: 5em;
		width: 58em;
	}
</style>
