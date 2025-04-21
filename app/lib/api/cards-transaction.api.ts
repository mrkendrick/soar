import type { CardsTransactionsResponseObject } from "../types/cards-transaction.type";
import { api } from "./api.config";

export const getCardsTransactions = async () =>
	await api.get<CardsTransactionsResponseObject>("/card-transactions");
