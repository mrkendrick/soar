export type ExpensesResponseObject = {
	success: boolean;
	data: Expense[];
};

export type Expense = {
	id: string;
	name: string;
	value: number;
};
