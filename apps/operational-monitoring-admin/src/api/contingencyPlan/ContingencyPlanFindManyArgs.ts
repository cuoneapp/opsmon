import { ContingencyPlanWhereInput } from "./ContingencyPlanWhereInput";
import { ContingencyPlanOrderByInput } from "./ContingencyPlanOrderByInput";

export type ContingencyPlanFindManyArgs = {
  where?: ContingencyPlanWhereInput;
  orderBy?: Array<ContingencyPlanOrderByInput>;
  skip?: number;
  take?: number;
};
