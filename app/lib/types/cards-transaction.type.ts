export type CardsTransactionsResponseObject = {
	success: boolean;
	data: {
		recent_transactions: Transaction[];
		cards: Card[];
	};
};

export type Transaction = {
	id: string;
	mode: string;
	description: string;
	type: "debit" | "credit";
	date: string;
};

export type Card = {
	id: string;
	card_holder: string;
	balance: number;
	valid_through: string;
	card_number: string;
	type: string;
};
