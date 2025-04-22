export type WeeklyActivitiesResponseObject = {
	success: boolean;
	data: WeeklyActivity[];
};

export type WeeklyActivity = {
	id: string;
	weekday: string;
	deposit: number;
	withdraw: number;
};
