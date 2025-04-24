import type { WeeklyActivitiesResponseObject } from "../types/weekly-activities.type";
import { api } from "./api.config";

export const getWeeklyActivities = async () =>
	await api.get<WeeklyActivitiesResponseObject>("/weekly-activities.json");
