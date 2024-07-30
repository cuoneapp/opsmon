import { QualityInspectionWhereInput } from "./QualityInspectionWhereInput";
import { QualityInspectionOrderByInput } from "./QualityInspectionOrderByInput";

export type QualityInspectionFindManyArgs = {
  where?: QualityInspectionWhereInput;
  orderBy?: Array<QualityInspectionOrderByInput>;
  skip?: number;
  take?: number;
};
