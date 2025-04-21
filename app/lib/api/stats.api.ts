import type { StatsResponseObject } from "../types/stats.type";
import { api } from "./api.config";

export const getStats = async () =>
	await api.get<StatsResponseObject>("/stats");
