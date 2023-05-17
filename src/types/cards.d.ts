export interface Cards {
	id?: number;
	name: string;
	image: string;
	reverse?: boolean;
	turnLeft?: boolean;
	turnRight?: boolean;
	inverted?: boolean;
	grayscale?: boolean;
	animation?: boolean;
	emotion?: string;
}
