export type TransactionsResponseObject = {
	success: boolean;
	data: Transaction[];
};

export type Transaction = {
	id: string;
	mode: string;
	description: string;
	type: "debit" | "credit";
	date: string;
	amount: number;
};
