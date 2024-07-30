import { GoalsAnalytics as TGoalsAnalytics } from "../api/goalsAnalytics/GoalsAnalytics";

export const GOALSANALYTICS_TITLE_FIELD = "id";

export const GoalsAnalyticsTitle = (record: TGoalsAnalytics): string => {
  return record.id?.toString() || String(record.id);
};
