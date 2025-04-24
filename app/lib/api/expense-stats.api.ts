import type { ExpensesResponseObject } from "../types/expenses.type";
import { api } from "./api.config";

export const getExpenseStats = async () =>
	await api.get<ExpensesResponseObject>("/expenses.json");
