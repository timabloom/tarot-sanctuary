import type { MarseilleDeck } from "../types/decks";

function shuffleDeck(deck: MarseilleDeck[]): MarseilleDeck[] {
	const shuffledDeck = [...deck];
	for (let i = shuffledDeck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
	}
	return shuffledDeck;
}

export function randomizeSpread(spreadSize: number, deck: MarseilleDeck[]): MarseilleDeck[] {
	const shuffledDeck = shuffleDeck(deck);
	return shuffledDeck.slice(0, spreadSize);
}
