import type { Cards } from "../types/cards";

function shuffleDeck(
	deck: Cards[],
	reverse: boolean,
	turn: boolean,
	inverted: boolean,
	grayscale: boolean
): Cards[] {
	const cleanDeck = deck.map((card) => {
		return {
			...card,
			reverse: false,
			turnLeft: false,
			turnRight: false,
			inverted: false,
			grayscale: false
		};
	});
	const shuffledDeck = [...cleanDeck];
	for (let i = shuffledDeck.length - 1; i >= 0; i--) {
		const c = Math.random();
		const d = Math.random();
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];

		// colour shuffle
		if (inverted === true && grayscale === true) {
			if (c <= 1 / 10 && inverted === true) {
				shuffledDeck[i].inverted = true;
			} else if (c > 9 / 10 && grayscale === true) {
				shuffledDeck[i].grayscale = true;
			}
		} else if (c <= 1 / 8 && inverted === true) {
			shuffledDeck[i].inverted = true;
		} else if (c > 7 / 8 && grayscale === true) {
			shuffledDeck[i].grayscale = true;
		}

		// direction shuffle
		if (reverse === true && turn === true) {
			if (d <= 0.25 && reverse === true) {
				shuffledDeck[i].reverse = true;
			} else if (d > 9 / 10 && turn === true) {
				shuffledDeck[i].turnLeft = true;
			} else if (d > 8 / 10 && turn === true) {
				shuffledDeck[i].turnRight = true;
			}
		} else if (d <= 0.5 && reverse === true) {
			shuffledDeck[i].reverse = true;
		} else if (d <= 1 / 10 && turn === true) {
			shuffledDeck[i].turnLeft = true;
		} else if (d > 9 / 10 && turn === true) {
			shuffledDeck[i].turnRight = true;
		}
	}
	return shuffledDeck;
}

export function randomizeSpread(
	spreadSize: number,
	deck: Cards[],
	reverse: boolean,
	turn: boolean,
	inverted: boolean,
	grayscale: boolean
): Cards[] {
	const shuffledDeck = shuffleDeck(deck, reverse, turn, inverted, grayscale);
	return shuffledDeck.slice(0, spreadSize);
}
