<script lang="ts">
	import { marseilleDeck } from "../../lib/marseille-deck";
	import { riderWaiteSmithDeck } from "$lib/rider-waite-smith-deck";

	let deck = marseilleDeck;
	let name = "Tarot de Marseille Deck";
	let attributionLink = "https://cbdtarot.com";
	let attributionName = "CBD Tarot de Marseille by Dr. Yoav Ben-Dov";

	function switchDeck(deckSwitch: string): void {
		if (deckSwitch === "marseille") {
			deck = marseilleDeck;
			name = "Tarot de Marseille Deck";
			attributionLink = "https://cbdtarot.com";
			attributionName = "CBD Tarot de Marseille by Dr. Yoav Ben-Dov";
		} else if (deckSwitch === "rider-waite-smith") {
			deck = riderWaiteSmithDeck;
			name = "Rider Waite Smith Deck";
			attributionLink = "/attributions";
			attributionName = "Enhanced Rider-Waite Tarot by Timothy Magee";
		}
	}
</script>

<svelte:head>
	<title>Decks - Description</title>
</svelte:head>

<header>
	<div class="options-container">
		<h1>Tarot Decks</h1>
		<div>
			<label>
				<input type="radio" name="deck" checked on:change={() => switchDeck("marseille")} />
				Tarot de Marseille
			</label>
			<label>
				<input type="radio" name="deck" on:change={() => switchDeck("rider-waite-smith")} />
				Rider Waite Smith
			</label>
		</div>
	</div>
</header>

<main>
	<div>
		<h2>{name}</h2>
		<div class="attribution-container">
			<a class="attribution" href={attributionLink}>{attributionName}</a>
		</div>
	</div>

	<div class="cards-container">
		{#each deck as card (card)}
			<div class="card">
				<img alt={card.name} src={card.image} loading="lazy" />
				<h3>{card.name}</h3>
			</div>
		{/each}
	</div>
</main>

<style>
	header {
		text-align: center;
	}

	h1 {
		margin-top: 1.5em;
	}

	h2 {
		font-size: 2em;
		margin-top: 0.5em;
		margin-bottom: 0.4em;
		text-align: center;
	}

	.attribution-container {
		text-align: center;
	}

	.options-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
	}

	.options-container div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: auto;
		margin-right: auto;
	}

	.options-container h1 {
		margin-bottom: 0.5em;
	}

	label {
		margin-bottom: 0.3em;
	}

	.cards-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1em 3em 2em 3em;
		gap: 1em;
	}

	.card {
		max-width: 200px;
		text-align: center;
	}

	.card img {
		max-width: 100%;
		border-radius: 5px;
	}

	.card h3 {
		margin-top: 0.5em;
	}
</style>
