import { QualityInspection as TQualityInspection } from "../api/qualityInspection/QualityInspection";

export const QUALITYINSPECTION_TITLE_FIELD = "id";

export const QualityInspectionTitle = (record: TQualityInspection): string => {
  return record.id?.toString() || String(record.id);
};
