import { PeriodicGoals as TPeriodicGoals } from "../api/periodicGoals/PeriodicGoals";

export const PERIODICGOALS_TITLE_FIELD = "id";

export const PeriodicGoalsTitle = (record: TPeriodicGoals): string => {
  return record.id?.toString() || String(record.id);
};
