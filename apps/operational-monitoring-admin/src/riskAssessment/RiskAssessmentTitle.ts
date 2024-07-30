import { RiskAssessment as TRiskAssessment } from "../api/riskAssessment/RiskAssessment";

export const RISKASSESSMENT_TITLE_FIELD = "id";

export const RiskAssessmentTitle = (record: TRiskAssessment): string => {
  return record.id?.toString() || String(record.id);
};
