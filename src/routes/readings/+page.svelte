<script lang="ts">
	import { randomizeSpread } from "../../lib/randomize-card-functions";
	import { marseilleDeck, marseilleCardBack } from "../../lib/marseille-deck";

	import type { MarseilleDeck } from "../../types/decks";

	let spread: number = 0;
	let cards: MarseilleDeck[] = marseilleCardBack;

	function changeSpread(newSpread: number): void {
		spread = newSpread;
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
	<div>
		<button on:click={() => changeSpread(1)}>Single Card</button>
		<button on:click={() => changeSpread(3)}>Three Cards</button>
		<button on:click={() => changeSpread(5)}>Five Cards</button>
	</div>

	<div class="cards-container">
		{#each cards as card (card)}
			<div class="card">
				<img alt={card.name} src={card.image} />
				<h2>{card.name !== "Marseille Card Back" ? card.name : ""}</h2>
			</div>
		{/each}
	</div>
</main>

<style>
	header {
		text-align: center;
	}
	main {
		text-align: center;
	}
	.cards-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1em 3em 2em 3em;
		gap: 1em;
	}
	.card {
		text-align: center;
	}
	.card h2 {
		margin-top: 0.5em;
	}
</style>
