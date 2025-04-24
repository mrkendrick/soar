import { z } from "zod";

export const updateProfileSchema = z.object({
	username: z.string().min(2),
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(8),
	dob: z.string().date(),
	present_address: z.string().nonempty(),
	permanent_address: z.string().nonempty(),
	city: z.string().nonempty(),
	postal_code: z.string().nonempty(),
	country: z.string().nonempty(),
});
