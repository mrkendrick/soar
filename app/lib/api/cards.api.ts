import type { CardsResponseObject } from "../types/cards.type";
import { api } from "./api.config";

export const getCards = async () =>
	await api.get<CardsResponseObject>("/cards.json");
