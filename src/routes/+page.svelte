<script></script>

<svelte:head>
	<title>Tarot Sanctuary - A safe place to reinvent the Tarot</title>
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
		padding: 1.6em 1em 2.4em 1em;
		color: #f1f1f1;
		border-top: var(--main-accent-color) 2px solid;
	}
	header div {
		max-width: 50em;
		padding: 0 1em;
	}

	.title {
		text-align: center;
		margin-top: 1.6em;
		padding: 0 1em;
	}
	.subtitle {
		text-align: center;
		margin-bottom: 2.5em;
		padding: 0 1em;
	}

	.maxims-container {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 3em;
		padding: 0em 3em;
		max-width: 80em;
		margin-left: auto;
		margin-right: auto;
	}
	.maxim-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em 3em 2em 3em;
		max-width: 220px;
		height: 560px;
		background-color: var(--secondary-bg-color);
		position: relative;
	}
	.maxim-container:before {
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
		text-align: center;
	}
	.card-name {
		margin-bottom: 0.5em;
		margin-top: 0.5em;
	}
	.card-container {
		width: 200px;
		height: 378px;
		overflow: hidden;
		position: relative;
		border: 2px solid black;
	}

	.card-container img {
		position: absolute;
		top: -10%;
		left: -6.3%;
		transform: scale(0.8);
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
		border-bottom: 1em solid #4e4b475b;
	}
	.step-2 {
		height: 4em;
		width: 54em;
		border-bottom: 1em solid #4e4b475b;
	}
	.step-3 {
		height: 5em;
		width: 58em;
	}
	@media screen and (max-width: 1200px) {
		.step-1 {
			width: 70%;
		}
		.step-2 {
			width: 75%;
		}
		.step-3 {
			width: 80%;
		}
	}
</style>
