import { GoalAssignmentsWhereInput } from "./GoalAssignmentsWhereInput";
import { GoalAssignmentsOrderByInput } from "./GoalAssignmentsOrderByInput";

export type GoalAssignmentsFindManyArgs = {
  where?: GoalAssignmentsWhereInput;
  orderBy?: Array<GoalAssignmentsOrderByInput>;
  skip?: number;
  take?: number;
};
