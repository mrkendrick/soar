export type QuickUsersResponseObject = {
	success: boolean;
	data: QuickUser[];
};

export type QuickUser = {
	id: string;
	name: string;
	position: string;
	profile_picture: string;
};
