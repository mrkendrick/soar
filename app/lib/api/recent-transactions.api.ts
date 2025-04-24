import type { TransactionsResponseObject } from "../types/transaction.type";
import { api } from "./api.config";

export const getRecentTransactions = async () =>
	await api.get<TransactionsResponseObject>("/transactions.json");
