import { PeriodicTask as TPeriodicTask } from "../api/periodicTask/PeriodicTask";

export const PERIODICTASK_TITLE_FIELD = "id";

export const PeriodicTaskTitle = (record: TPeriodicTask): string => {
  return record.id?.toString() || String(record.id);
};
