import { MonitoringTask as TMonitoringTask } from "../api/monitoringTask/MonitoringTask";

export const MONITORINGTASK_TITLE_FIELD = "id";

export const MonitoringTaskTitle = (record: TMonitoringTask): string => {
  return record.id?.toString() || String(record.id);
};
