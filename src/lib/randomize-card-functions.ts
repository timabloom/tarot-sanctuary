import type { Cards } from "../types/cards";

function shuffleDeck(
	spreadSize: number,
	deck: Cards[],
	reverse: boolean,
	turn: boolean,
	inverted: boolean,
	grayscale: boolean,
	animation: boolean,
	arcanaMajor: boolean,
	arcanaMinor: boolean,
	duplicates: boolean,
	fused: boolean
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
			fused: false
		};
	});
	const shuffledDeck: Cards[] = [...cleanDeck];
	const duplicateDeck: Cards[] = [];
	let id = 0;

	// shuffle first time
	for (let i = 0; i <= cleanDeck.length - 1; i++) {
		// normal shuffle
		const n = Math.floor(Math.random() * cleanDeck.length);

		// duplicate shuffle
		const d = Math.floor(Math.random() * cleanDeck.length);

		if (duplicates) {
			const object = {
				...cleanDeck[d],
				id: id++
			};
			duplicateDeck.push(object);

			// options for duplicate deck
			if (arcanaMajor && duplicateDeck[i].arcana === "major") {
				optionsShuffle(duplicateDeck, i, animation, inverted, grayscale, reverse, turn, fused);
			} else if (arcanaMinor && duplicateDeck[i].arcana === "minor") {
				optionsShuffle(duplicateDeck, i, animation, inverted, grayscale, reverse, turn, fused);
			} else if (!arcanaMajor && !arcanaMinor) {
				optionsShuffle(duplicateDeck, i, animation, inverted, grayscale, reverse, turn, fused);
			}
		} else {
			[shuffledDeck[i], shuffledDeck[n]] = [shuffledDeck[n], shuffledDeck[i]];
		}
	}

	// options for normal deck
	for (let i = 0; i <= shuffledDeck.length - 1; i++) {
		if (arcanaMajor && shuffledDeck[i].arcana === "major") {
			optionsShuffle(shuffledDeck, i, animation, inverted, grayscale, reverse, turn, fused);
		} else if (arcanaMinor && shuffledDeck[i].arcana === "minor") {
			optionsShuffle(shuffledDeck, i, animation, inverted, grayscale, reverse, turn, fused);
		} else if (!arcanaMajor && !arcanaMinor) {
			optionsShuffle(shuffledDeck, i, animation, inverted, grayscale, reverse, turn, fused);
		}
	}

	// shuffle normal deck again
	for (let i = 0; i <= shuffledDeck.length - 1; i++) {
		// normal shuffle
		const n = Math.floor(Math.random() * cleanDeck.length);
		[shuffledDeck[i], shuffledDeck[n]] = [shuffledDeck[n], shuffledDeck[i]];
	}

	// add fused images
	let addCard = spreadSize;
	if (duplicates) {
		for (let i = 0; i <= duplicateDeck.length - 1; i++) {
			if (duplicateDeck[i].fused === true) {
				duplicateDeck[i].image2 = duplicateDeck[addCard].image;
				duplicateDeck[i].name2 = duplicateDeck[addCard].name;
				addCard++;
			}
		}
		return duplicateDeck;
	} else {
		for (let i = 0; i <= shuffledDeck.length - 1; i++) {
			if (shuffledDeck[i].fused === true) {
				shuffledDeck[i].image2 = shuffledDeck[addCard].image;
				shuffledDeck[i].name2 = shuffledDeck[addCard].name;
				addCard++;
			}
		}
		return shuffledDeck;
	}
}

function optionsShuffle(
	shuffledDeck: Cards[],
	i: number,
	animation: boolean,
	inverted: boolean,
	grayscale: boolean,
	reverse: boolean,
	turn: boolean,
	fused: boolean
) {
	const probabilities = {
		animation: animation ? 0.1 : 0,
		inverted: inverted ? 0.1 : 0,
		grayscale: grayscale ? 0.1 : 0,
		reverse: reverse ? 1 : 0,
		turn: turn ? 0.2 : 0,
		fused: fused ? 0.1 : 0
	};

	const options = setOptions(probabilities);

	if (options.reverse) {
		shuffledDeck[i].reverse = true;
	}
	if (options.inverted) {
		shuffledDeck[i].inverted = true;
	}
	if (options.grayscale) {
		shuffledDeck[i].grayscale = true;
	}
	if (options.fused) {
		shuffledDeck[i].fused = true;
	}

	if (options.turn) {
		const randomValue = Math.random();
		if (randomValue <= 0.5) {
			shuffledDeck[i].turnLeft = true;
		} else {
			shuffledDeck[i].turnRight = true;
		}
	}

	if (options.animation) {
		shuffledDeck[i].animation = options.animation;
		const emotions = ["loving", "happy", "excited", "angry", "afraid", "sad"];
		const index = Math.floor(Math.random() * emotions.length);
		shuffledDeck[i].emotion = emotions[index];
	}
}

type Options = {
	animation: boolean;
	inverted: boolean;
	grayscale: boolean;
	reverse: boolean;
	turn: boolean;
	fused: boolean;
};

type Probabilities = {
	animation: number;
	inverted: number;
	grayscale: number;
	reverse: number;
	turn: number;
	fused: number;
};

export function setOptions(probabilities: Probabilities): Options {
	let options: Options = {
		animation: false,
		inverted: false,
		grayscale: false,
		reverse: false,
		turn: false,
		fused: false
	};

	// compute the total of provided probabilities
	const totalProbability = Object.values(probabilities).reduce((acc, prob) => acc + prob, 0);

	let scale = 1;
	// if totalProbability exceeds 0.5, scale down probabilities proportionally
	if (totalProbability > 0.5) {
		scale = 0.5 / totalProbability;
	}

	let accumulatedProb = 0;
	const randomValue = Math.random();
	// one option selected based on chunked probabilities
	for (let key in probabilities) {
		if (probabilities[key as keyof Probabilities] > 0) {
			accumulatedProb += probabilities[key as keyof Probabilities] * scale;
			if (randomValue < accumulatedProb) {
				options[key as keyof Options] = true;
				break;
			}
		}
	}

	return options;
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
	duplicates: boolean,
	fused: boolean
): Cards[] {
	const shuffledDeck = shuffleDeck(
		spreadSize,
		deck,
		reverse,
		turn,
		inverted,
		grayscale,
		animation,
		arcanaMajor,
		arcanaMinor,
		duplicates,
		fused
	);
	return shuffledDeck.slice(0, spreadSize);
}
