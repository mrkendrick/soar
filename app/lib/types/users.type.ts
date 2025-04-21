export type UsersResponseObject = {
	success: boolean;
	data: {
		user: User;
		quick_users: QuickUser[];
	};
};

export type User = {
	id: string;
	name: string;
	username: string;
	email: string;
	dob: string;
	address: string;
	city: string;
	postal_code: string;
	country: string;
	profile_picture: string;
};

export type QuickUser = {
	id: string;
	name: string;
	position: string;
	profile_picture: string;
};
