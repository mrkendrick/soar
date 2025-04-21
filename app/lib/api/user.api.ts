import type { UsersResponseObject } from "../types/users.type";
import { api } from "./api.config";

export const getUsers = async () =>
	await api.get<UsersResponseObject>("/users");
