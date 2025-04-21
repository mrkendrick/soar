export type StatsResponseObject = {
	success: boolean;
	data: {
		expenses: Expense[];
		weekly_activity: WeeklyActivity[];
		balance_history: number[];
	};
};

export type Expense = {
	id: string;
	name: string;
	value: number;
};

export type WeeklyActivity = {
	id: string;
	weekday: string;
	deposit: number;
	withdraw: number;
};
