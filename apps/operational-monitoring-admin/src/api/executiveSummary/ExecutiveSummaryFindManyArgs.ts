import { ExecutiveSummaryWhereInput } from "./ExecutiveSummaryWhereInput";
import { ExecutiveSummaryOrderByInput } from "./ExecutiveSummaryOrderByInput";

export type ExecutiveSummaryFindManyArgs = {
  where?: ExecutiveSummaryWhereInput;
  orderBy?: Array<ExecutiveSummaryOrderByInput>;
  skip?: number;
  take?: number;
};
