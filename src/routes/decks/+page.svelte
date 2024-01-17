<script lang="ts">
	import { marseilleDeck } from "../../lib/marseille-deck";
	import { riderWaiteSmithDeck } from "$lib/rider-waite-smith-deck";

	import type { Cards } from "../../types/cards";

	let deck = marseilleDeck;
	let name = "Tarot de Marseille Deck";
	let attributionLink = "https://cbdtarot.com";
	let attributionName = "CBD Tarot de Marseille by Dr. Yoav Ben-Dov";
	let cardDeckCSS = "marseille";
	let selectedCard = deck[0];

	function switchDeck(deckSwitch: string): void {
		if (deckSwitch === "marseille") {
			deck = marseilleDeck;
			name = "Tarot de Marseille Deck";
			attributionLink = "https://cbdtarot.com";
			attributionName = "CBD Tarot de Marseille by Dr. Yoav Ben-Dov";
			cardDeckCSS = "marseille";
			selectedCard = deck[0];
		} else if (deckSwitch === "rider-waite-smith") {
			deck = riderWaiteSmithDeck;
			name = "Rider Waite Smith Deck";
			attributionLink = "/attributions";
			attributionName = "Enhanced Rider-Waite Tarot by Timothy Magee";
			cardDeckCSS = "rider-waite-smith";
			selectedCard = deck[0];
		}
	}

	function handleCardClick(card: Cards) {
		selectedCard = card;
		const element = document.getElementById("scroll-to");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		} else console.log("element not found");
	}

	function handleArrowClick(changeCard: string) {
		if (changeCard === "previous") {
			if (deck.indexOf(selectedCard) === 0) {
				selectedCard = deck[77];
			} else selectedCard = deck[deck.indexOf(selectedCard) - 1];
		} else if (changeCard === "next") {
			if (deck.indexOf(selectedCard) === 77) {
				selectedCard = deck[0];
			} else selectedCard = deck[deck.indexOf(selectedCard) + 1];
		}
	}
</script>

<svelte:head>
	<title>Decks - Description</title>
</svelte:head>

<header>
	<div class="options-container">
		<h1>Tarot Decks</h1>
		<div id="scroll-to">
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
			<a class="attribution" rel="noreferrer" href={attributionLink}>{attributionName}</a>
		</div>
	</div>

	<div class="selected-card-container">
		<button class="arrow left" on:click={() => handleArrowClick("previous")} />
		<img alt={selectedCard.name} src={selectedCard.image} loading="lazy" />
		<button class="arrow right" on:click={() => handleArrowClick("next")} />
	</div>

	<div class="card-details-container">
		<h3>{selectedCard.name}</h3>
		<p>{selectedCard.interpretation}</p>
		<p>{selectedCard.reversedInterpretation}</p>
		<p>{selectedCard.author}</p>
	</div>

	<div class="cards-container">
		{#each deck as card (card)}
			<button class={cardDeckCSS} on:click={() => handleCardClick(card)}>
				<img alt={card.name} src={card.image} loading="lazy" />
				<h3>{card.name}</h3>
			</button>
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

	.attribution:hover {
		text-decoration: none;
	}

	.attribution {
		text-decoration: none;
		color: inherit;
		text-decoration: underline;
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

	.selected-card-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2em 0;
	}

	.selected-card-container img {
		max-width: 290px;
	}

	.card-details-container {
		background-color: var(--secondary-bg-color);
		padding: 1em 1em 2em 1em;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 4em;
		border-top: 3px solid var(--main-accent-color);
	}

	.card-details-container h3,
	p {
		margin-left: 10%;
		margin-right: 10%;
	}

	.arrow {
		border: solid var(--main-font-color);
		border-width: 0 7px 7px 0;
		padding: 7px;
		background: none;
		cursor: pointer;
		margin: 0 1em;
	}

	.arrow:hover {
		border-color: var(--secondary-accent-color);
	}

	.right {
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}

	.left {
		transform: rotate(135deg);
		-webkit-transform: rotate(135deg);
	}

	.cards-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1em;
		gap: 1em;
		margin-bottom: 3em;
	}

	.marseille,
	.rider-waite-smith {
		max-width: 270px;
		height: 570px;
		text-align: center;
		background: none;
		border: none;
		font-family: inherit;
		font-size: inherit;
		cursor: pointer;
		color: inherit;
	}

	.rider-waite-smith {
		max-width: 270px;
		height: 520px;
	}

	.marseille img,
	.rider-waite-smith img {
		max-width: 90%;
	}

	.marseille img:hover,
	.rider-waite-smith img:hover {
		max-width: 100%;
	}

	.marseille h3,
	.rider-waite-smith h3 {
		margin-top: 0.5em;
	}
</style>
