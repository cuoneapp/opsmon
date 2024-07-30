import { PeriodicGoalsWhereInput } from "./PeriodicGoalsWhereInput";
import { PeriodicGoalsOrderByInput } from "./PeriodicGoalsOrderByInput";

export type PeriodicGoalsFindManyArgs = {
  where?: PeriodicGoalsWhereInput;
  orderBy?: Array<PeriodicGoalsOrderByInput>;
  skip?: number;
  take?: number;
};
