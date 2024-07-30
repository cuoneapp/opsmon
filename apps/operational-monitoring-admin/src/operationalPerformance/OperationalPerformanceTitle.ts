import { OperationalPerformance as TOperationalPerformance } from "../api/operationalPerformance/OperationalPerformance";

export const OPERATIONALPERFORMANCE_TITLE_FIELD = "id";

export const OperationalPerformanceTitle = (
  record: TOperationalPerformance
): string => {
  return record.id?.toString() || String(record.id);
};
