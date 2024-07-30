import { ContingencyPlan as TContingencyPlan } from "../api/contingencyPlan/ContingencyPlan";

export const CONTINGENCYPLAN_TITLE_FIELD = "id";

export const ContingencyPlanTitle = (record: TContingencyPlan): string => {
  return record.id?.toString() || String(record.id);
};
