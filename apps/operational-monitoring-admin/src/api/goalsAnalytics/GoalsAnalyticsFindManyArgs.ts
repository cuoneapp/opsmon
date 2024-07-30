import { GoalsAnalyticsWhereInput } from "./GoalsAnalyticsWhereInput";
import { GoalsAnalyticsOrderByInput } from "./GoalsAnalyticsOrderByInput";

export type GoalsAnalyticsFindManyArgs = {
  where?: GoalsAnalyticsWhereInput;
  orderBy?: Array<GoalsAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
