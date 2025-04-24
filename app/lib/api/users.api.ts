import type { QuickUsersResponseObject } from "../types/quick-users.type";
import { api } from "./api.config";

export const getQuickUsers = async () =>
	await api.get<QuickUsersResponseObject>("/quick-users.json");
