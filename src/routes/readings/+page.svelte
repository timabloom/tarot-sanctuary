<script lang="ts">
	// import functions
	import { randomizeSpread } from "../../lib/randomize-card-functions";

	// import decks
	import { marseilleDeck, marseilleCardBack } from "../../lib/marseille-deck";
	import { riderWaiteSmithDeck, riderWaiteSmithCardBack } from "../../lib/rider-waite-smith-deck";

	// import types
	import type { Cards } from "../../types/cards";

	let spread = 1;
	let cards: Cards[] = marseilleCardBack;
	let deck: Cards[] = marseilleDeck;
	let reverse = false;
	let turn = false;
	let inverted = false;
	let grayscale = false;
	let animation = false;
	let arcanaMajor = false;
	let arcanaMinor = false;
	let duplicates = false;

	function switchDeck(deckSwitch: string): void {
		if (deckSwitch === "marseille") {
			cards = marseilleCardBack;
			deck = marseilleDeck;
			cards = [...marseilleCardBack];
			for (let i = 1; i < spread; i++) {
				cards.push({ ...marseilleCardBack[0], id: marseilleCardBack.length + i });
			}
		} else if (deckSwitch === "rider-waite-smith") {
			cards = riderWaiteSmithCardBack;
			deck = riderWaiteSmithDeck;
			cards = [...riderWaiteSmithCardBack];
			for (let i = 1; i < spread; i++) {
				cards.push({ ...riderWaiteSmithCardBack[0], id: riderWaiteSmithCardBack.length + i });
			}
		}
	}

	function changeSpread(event: Event): void {
		const newSpread = parseInt((event.target as HTMLInputElement).value);
		spread = newSpread;
		if (deck === marseilleDeck) {
			cards = [...marseilleCardBack];
			for (let i = 1; i < newSpread; i++) {
				cards.push({ ...marseilleCardBack[0], id: marseilleCardBack.length + i });
			}
		} else {
			cards = [...riderWaiteSmithCardBack];
			for (let i = 1; i < newSpread; i++) {
				cards.push({ ...riderWaiteSmithCardBack[0], id: riderWaiteSmithCardBack.length + i });
			}
		}
	}

	function drawCards(): void {
		cards = randomizeSpread(
			spread,
			deck,
			reverse,
			turn,
			inverted,
			grayscale,
			animation,
			arcanaMajor,
			arcanaMinor,
			duplicates
		);
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
		<h2>Decks</h2>
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
	<div class="options-container">
		<h2>Options</h2>
		<div>
			<h3>Deck Options</h3>
			<label>
				<input type="checkbox" bind:checked={arcanaMajor} />
				Major Arcana
			</label>
			<label>
				<input type="checkbox" bind:checked={arcanaMinor} />
				Minor Arcana
			</label>
			<label>
				<input type="checkbox" bind:checked={duplicates} />
				Duplicates
			</label>
			<h3>Card Options</h3>
			<label class="label-reverse">
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
			<label>
				<input type="checkbox" bind:checked={animation} />
				Animation
			</label>
		</div>
	</div>

	<div class="spread-container">
		<input type="range" min="1" max="10" bind:value={spread} on:change={changeSpread} />
		<p>Selected spread: {spread}</p>
	</div>

	<div class="cards-container">
		{#each cards as card (card)}
			<div>
				<div
					class={card.turnLeft === true || card.turnRight === true
						? "image-container-flip"
						: "image-container"}
				>
					<img
						class={`
							${card.reverse === true && "reverse"}
							${card.turnLeft === true && "turn-left"}
							${card.turnRight === true && "turn-right"}
							${card.inverted === true && "inverted"}
							${card.grayscale === true && "grayscale"}
							${card.animation === true && `${card.emotion}`}
							`}
						alt={card.name}
						src={card.image}
					/>
				</div>
				<h2
					class={(card.turnLeft === true || card.turnRight === true) && deck === riderWaiteSmithDeck
						? "card-name-flip-rider"
						: card.turnLeft === true || card.turnRight === true
						? "card-name-flip"
						: ""}
				>
					{card.name !== "Card Back" ? card.name : "Card Back"}
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
	h1 {
		margin-top: 1.5em;
	}
	main {
		text-align: center;
		margin-bottom: 3em;
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
	.spread-container p {
		text-align: start;
		width: 10em;
	}
	.spread-container input {
		width: 10em;
	}
	.cards-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 1em;
		gap: 1em;
	}
	.image-container {
		position: relative;
		margin: 0 1em;
		height: 570px;
		width: auto;
	}
	.image-container-flip {
		margin: 0 1em;
		height: 570px;
		width: 570px;
	}
	img {
		border-radius: 10px;
		height: 570px;
		width: auto;
	}
	h2 {
		margin-top: 0.5em;
	}
	.card-name-flip {
		margin-top: -4.5em;
		margin-bottom: 5.84em;
	}
	.card-name-flip-rider {
		margin-top: -4em;
		margin-bottom: 5.84em;
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

	.sad {
		animation: rotateLeft 2.5s ease-in-out infinite, crying 10s linear infinite;
	}

	@keyframes rotateLeft {
		0% {
			transform: translateY(0) perspective(400px) rotateZ(0);
		}
		50% {
			transform: translateY(10px) perspective(400px) rotateZ(-5deg);
		}
		100% {
			transform: translateY(0) perspective(400px) rotateZ(0);
		}
	}

	@keyframes crying {
		0%,
		100% {
			transform: translateX(0) rotateZ(0);
		}
		10%,
		30% {
			transform: translateX(-5px) rotateZ(-5deg);
		}
		50% {
			transform: translateX(-3px) rotateZ(-3deg);
		}
		70%,
		90% {
			transform: translateX(-5px) rotateZ(-5deg);
		}
	}

	.afraid {
		animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}

	.angry {
		animation: angry 0.15s linear infinite;
	}

	@keyframes angry {
		0%,
		100% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(5deg);
		}
	}

	.loving {
		animation: pulse 0.8s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	.excited {
		animation: excited 0.3s ease-in-out infinite;
	}

	@keyframes excited {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	.happy {
		animation: joy 1s ease-in-out infinite;
	}

	@keyframes joy {
		0% {
			transform: translateY(0) rotate(0deg) scale(1);
		}
		25% {
			transform: translateY(-10px) rotate(5deg) scale(1.1);
		}
		50% {
			transform: translateY(0) rotate(0deg) scale(1);
		}
		75% {
			transform: translateY(-10px) rotate(-5deg) scale(1.1);
		}
		100% {
			transform: translateY(0) rotate(0deg) scale(1);
		}
	}
</style>
