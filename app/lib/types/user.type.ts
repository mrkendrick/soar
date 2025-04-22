export type UserResponseObject = {
	success: boolean;
	data: User;
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
