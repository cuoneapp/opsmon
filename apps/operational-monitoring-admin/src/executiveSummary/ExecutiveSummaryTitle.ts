import { ExecutiveSummary as TExecutiveSummary } from "../api/executiveSummary/ExecutiveSummary";

export const EXECUTIVESUMMARY_TITLE_FIELD = "id";

export const ExecutiveSummaryTitle = (record: TExecutiveSummary): string => {
  return record.id?.toString() || String(record.id);
};
