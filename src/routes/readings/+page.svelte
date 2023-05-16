<script lang="ts">
	import { randomizeSpread } from "../../lib/randomize-card-functions";

	// import decks
	import { marseilleDeck, marseilleCardBack } from "../../lib/marseille-deck";

	// import types
	import type { Cards } from "../../types/cards";

	let spread = 1;
	let cards: Cards[] = marseilleCardBack;
	let reverse = false;
	let turn = false;
	let inverted = false;
	let grayscale = false;

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
		cards = randomizeSpread(spread, marseilleDeck, reverse, turn, inverted, grayscale);
	}
</script>

<svelte:head>
	<title>Readings - Description</title>
</svelte:head>

<header>
	<h1>Tarot Reading</h1>
</header>

<main>
	<div class="options-container">
		<h2>Options</h2>
		<div>
			<label>
				<input type="checkbox" bind:checked={reverse} />
				Reverse
			</label>
			<label>
				<input type="checkbox" bind:checked={turn} />
				Turn
			</label>
			<label>
				<input type="checkbox" bind:checked={inverted} />
				Inverted
			</label>
			<label>
				<input type="checkbox" bind:checked={grayscale} />
				Grayscale
			</label>
		</div>
	</div>

	<div class="spread-container">
		<button on:click={() => changeSpread(1)}>Single Card</button>
		<button on:click={() => changeSpread(3)}>Three Cards</button>
		<button on:click={() => changeSpread(5)}>Five Cards</button>
	</div>

	<div class="cards-container">
		{#each cards as card (card)}
			<div>
				{#if card.reverse === true}
					<div class="image-container">
						<img
							class={card.grayscale === true
								? "grayscale reverse"
								: card.inverted === true
								? "inverted reverse"
								: "reverse"}
							alt={card.name}
							src={card.image}
						/>
					</div>
					<h2>
						{card.name !== "Marseille Card Back" ? card.name : "Card Back"}
					</h2>
				{:else if card.turnLeft === true}
					<div class="image-container-flip">
						<img
							class={card.grayscale === true
								? "grayscale turn-left"
								: card.inverted === true
								? "inverted turn-left"
								: "turn-left"}
							alt={card.name}
							src={card.image}
						/>
					</div>
					<h2 class="card-name-flip">
						{card.name !== "Marseille Card Back" ? card.name : "Card Back"}
					</h2>
				{:else if card.turnRight === true}
					<div class="image-container-flip">
						<img
							class={card.grayscale === true
								? "grayscale turn-right"
								: card.inverted === true
								? "inverted turn-right"
								: "turn-right"}
							alt={card.name}
							src={card.image}
						/>
					</div>
					<h2 class="card-name-flip">
						{card.name !== "Marseille Card Back" ? card.name : "Card Back"}
					</h2>
				{:else}
					<div class="image-container">
						<img
							class={card.grayscale === true
								? "grayscale"
								: card.inverted === true
								? "inverted"
								: ""}
							alt={card.name}
							src={card.image}
						/>
					</div>
					<h2>
						{card.name !== "Marseille Card Back" ? card.name : "Card Back"}
					</h2>
				{/if}
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
	.options-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 2em;
	}
	.options-container div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: auto;
		margin-right: auto;
	}
	.options-container h2 {
		margin-bottom: 0.5em;
	}
	label {
		margin-bottom: 0.3em;
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
		margin-top: 1em;
		gap: 1em;
	}
	.image-container {
		margin: 0 1em;
		height: 570px;
		width: 300px;
	}
	.image-container-flip {
		margin: 0 1em;
		height: 570px;
		width: 570px;
	}
	h2 {
		margin-top: 0.5em;
	}
	.card-name-flip {
		margin-top: -4.5em;
		margin-bottom: 5.85em;
	}
	.reverse {
		transform: scaleY(-1);
	}
	.turn-left {
		transform: rotate(90deg);
	}
	.turn-right {
		transform: rotate(-90deg);
	}
	.inverted {
		filter: invert(1);
	}
	.grayscale {
		filter: grayscale(1);
	}
</style>
