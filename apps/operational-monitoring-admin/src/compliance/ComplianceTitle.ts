import { Compliance as TCompliance } from "../api/compliance/Compliance";

export const COMPLIANCE_TITLE_FIELD = "id";

export const ComplianceTitle = (record: TCompliance): string => {
  return record.id?.toString() || String(record.id);
};
