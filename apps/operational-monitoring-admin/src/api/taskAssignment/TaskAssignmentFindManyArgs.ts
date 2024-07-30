import { TaskAssignmentWhereInput } from "./TaskAssignmentWhereInput";
import { TaskAssignmentOrderByInput } from "./TaskAssignmentOrderByInput";

export type TaskAssignmentFindManyArgs = {
  where?: TaskAssignmentWhereInput;
  orderBy?: Array<TaskAssignmentOrderByInput>;
  skip?: number;
  take?: number;
};
