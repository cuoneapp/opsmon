import { RiskAssessmentWhereInput } from "./RiskAssessmentWhereInput";
import { RiskAssessmentOrderByInput } from "./RiskAssessmentOrderByInput";

export type RiskAssessmentFindManyArgs = {
  where?: RiskAssessmentWhereInput;
  orderBy?: Array<RiskAssessmentOrderByInput>;
  skip?: number;
  take?: number;
};
