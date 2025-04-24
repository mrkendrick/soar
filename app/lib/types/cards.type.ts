export type CardsResponseObject = {
	success: boolean;
	data: Card[];
};

export type Card = {
	id: string;
	card_holder: string;
	balance: number;
	valid_through: string;
	card_number: string;
	type: string;
};
