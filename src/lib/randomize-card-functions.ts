import type { Cards } from "../types/cards";

function shuffleDeck(
	deck: Cards[],
	reverse: boolean,
	turn: boolean,
	inverted: boolean,
	grayscale: boolean,
	animation: boolean,
	arcanaMajor: boolean,
	arcanaMinor: boolean,
	duplicates: boolean
): Cards[] {
	const cleanDeck = deck.map((card) => {
		return {
			...card,
			reverse: false,
			turnLeft: false,
			turnRight: false,
			inverted: false,
			grayscale: false,
			animation: false,
			arcanaMajor: false,
			arcanaMinor: false
		};
	});
	const shuffledDeck: Cards[] = [...cleanDeck];
	const duplicateDeck: Cards[] = [];
	let id = 0;

	for (let i = shuffledDeck.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		if (duplicates) {
			const object = {
				...shuffledDeck[j],
				id: id++
			};
			duplicateDeck.push(object);
		} else {
			[shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
		}
		// arcana options
		if (arcanaMajor && shuffledDeck[i].arcana === "major") {
			optionsShuffle(shuffledDeck, i, animation, inverted, grayscale, reverse, turn);
		} else if (arcanaMinor && shuffledDeck[i].arcana === "minor") {
			optionsShuffle(shuffledDeck, i, animation, inverted, grayscale, reverse, turn);
		} else if (!arcanaMajor && !arcanaMinor) {
			optionsShuffle(shuffledDeck, i, animation, inverted, grayscale, reverse, turn);
		}
	}
	if (duplicates) {
		return duplicateDeck;
	}
	return shuffledDeck;
}

function optionsShuffle(
	shuffledDeck: Cards[],
	i: number,
	animation: boolean,
	inverted: boolean,
	grayscale: boolean,
	reverse: boolean,
	turn: boolean
) {
	// animation shuffle
	const a = Math.random();
	if (animation === true && a <= 6 / 60) {
		shuffledDeck[i].animation = true;
		if (a <= 1 / 60) {
			shuffledDeck[i].emotion = "loving";
		} else if (a <= 2 / 60) {
			shuffledDeck[i].emotion = "happy";
		} else if (a <= 3 / 60) {
			shuffledDeck[i].emotion = "excited";
		} else if (a <= 4 / 60) {
			shuffledDeck[i].emotion = "angry";
		} else if (a <= 5 / 60) {
			shuffledDeck[i].emotion = "afraid";
		} else if (a <= 6 / 60) {
			shuffledDeck[i].emotion = "sad";
		}
	}

	// colour shuffle
	const c = Math.random();
	if (inverted === true && grayscale === true) {
		if (c <= 1 / 20 && inverted === true) {
			shuffledDeck[i].inverted = true;
		} else if (c <= 2 / 20 && grayscale === true) {
			shuffledDeck[i].grayscale = true;
		}
	} else if (c <= 2 / 20 && inverted === true) {
		shuffledDeck[i].inverted = true;
	} else if (c <= 2 / 20 && grayscale === true) {
		shuffledDeck[i].grayscale = true;
	}

	// direction shuffle
	const d = Math.random();
	if (shuffledDeck[i].animation !== true) {
		if (reverse === true && turn === true) {
			if (d <= 8 / 20 && reverse === true) {
				shuffledDeck[i].reverse = true;
			} else if (d > 19 / 20 && turn === true) {
				shuffledDeck[i].turnLeft = true;
			} else if (d > 18 / 20 && turn === true) {
				shuffledDeck[i].turnRight = true;
			}
		} else if (d <= 1 / 2 && reverse === true) {
			shuffledDeck[i].reverse = true;
		} else if (d <= 1 / 20 && turn === true) {
			shuffledDeck[i].turnLeft = true;
		} else if (d <= 2 / 20 && turn === true) {
			shuffledDeck[i].turnRight = true;
		}
	}
}

export function randomizeSpread(
	spreadSize: number,
	deck: Cards[],
	reverse: boolean,
	turn: boolean,
	inverted: boolean,
	grayscale: boolean,
	animation: boolean,
	arcanaMajor: boolean,
	arcanaMinor: boolean,
	duplicates: boolean
): Cards[] {
	const shuffledDeck = shuffleDeck(
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
	return shuffledDeck.slice(0, spreadSize);
}
