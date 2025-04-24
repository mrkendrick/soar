import type { BalanceHistoryResponseObject } from "../types/balance-history.type";
import { api } from "./api.config";

export const getBalanceHistory = async () =>
	await api.get<BalanceHistoryResponseObject>("/balance-history.json");
