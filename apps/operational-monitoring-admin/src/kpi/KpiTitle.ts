import { Kpi as TKpi } from "../api/kpi/Kpi";

export const KPI_TITLE_FIELD = "id";

export const KpiTitle = (record: TKpi): string => {
  return record.id?.toString() || String(record.id);
};
