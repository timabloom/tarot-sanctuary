<script lang="ts">
	import { randomizeSpread } from "../../lib/randomize-card-functions";
	import { marseilleDeck, marseilleCardBack } from "../../lib/marseille-deck";

	// import decks
	import type { MarseilleDeck } from "../../types/decks";

	let spread = 1;
	let cards: MarseilleDeck[] = marseilleCardBack;

	function changeSpread(newSpread: number): void {
		spread = newSpread;
		if (newSpread === 1) {
			cards = marseilleCardBack;
		} else if (newSpread === 3) {
			cards = [...marseilleCardBack];
			for (let i = 0; i < 2; i++) {
				cards.push({ ...marseilleCardBack[0], id: marseilleCardBack.length + i });
			}
		} else if (newSpread === 5) {
			cards = [...marseilleCardBack];
			for (let i = 0; i < 4; i++) {
				cards.push({ ...marseilleCardBack[0], id: marseilleCardBack.length + i });
			}
		}
	}

	function drawCards(): void {
		cards = randomizeSpread(spread, marseilleDeck);
	}
</script>

<svelte:head>
	<title>Readings - Description</title>
</svelte:head>

<header>
	<h1>Tarot Reading</h1>
</header>

<main>
	<div class="spread-container">
		<button on:click={() => changeSpread(1)}>Single Card</button>
		<button on:click={() => changeSpread(3)}>Three Cards</button>
		<button on:click={() => changeSpread(5)}>Five Cards</button>
	</div>

	<div class="cards-container">
		{#each cards as card (card)}
			<div>
				<div class="image-container">
					<img alt={card.name} src={card.image} />
				</div>
				<h2>
					{card.name !== "Marseille Card Back" ? card.name : "Card Back"}
				</h2>
			</div>
		{/each}
	</div>
	<button on:click={() => drawCards()}>{spread === 1 ? "Draw Card" : "Draw Cards"}</button>
</main>

<style>
	header {
		text-align: center;
	}
	main {
		text-align: center;
		margin-bottom: 3em;
	}
	.spread-container {
		display: flex;
		justify-content: center;
		gap: 0.5em;
	}
	.spread-container button {
		width: 7em;
	}
	.cards-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1em 3em 0 3em;
		gap: 1em;
	}
	.image-container {
		height: 570px; /* Change to suit your needs */
		width: 300px;
	}
	h2 {
		margin-top: 0.5em;
	}
</style>
