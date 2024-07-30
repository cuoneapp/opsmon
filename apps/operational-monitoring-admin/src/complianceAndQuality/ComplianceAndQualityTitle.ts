import { ComplianceAndQuality as TComplianceAndQuality } from "../api/complianceAndQuality/ComplianceAndQuality";

export const COMPLIANCEANDQUALITY_TITLE_FIELD = "id";

export const ComplianceAndQualityTitle = (
  record: TComplianceAndQuality
): string => {
  return record.id?.toString() || String(record.id);
};
