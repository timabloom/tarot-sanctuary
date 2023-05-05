<script lang="ts">
	import { marseilleDeck } from "../../lib/marseille-deck";
</script>

<svelte:head>
	<title>Decks - Description</title>
</svelte:head>

<header>
	<h1>Tarot de Marseille Deck</h1>
</header>

<main>
	<div class="cards-container">
		{#each marseilleDeck as card (card)}
			<div class="card">
				<img alt={card.name} src={card.image} />
				<h2>{card.name}</h2>
			</div>
		{/each}
	</div>
</main>

<style>
	header {
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
		max-width: 200px;
		text-align: center;
	}
	.card img {
		max-width: 100%;
	}
	.card h2 {
		margin-top: 0.5em;
	}
</style>
