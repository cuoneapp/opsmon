import { PeriodicTaskWhereInput } from "./PeriodicTaskWhereInput";
import { PeriodicTaskOrderByInput } from "./PeriodicTaskOrderByInput";

export type PeriodicTaskFindManyArgs = {
  where?: PeriodicTaskWhereInput;
  orderBy?: Array<PeriodicTaskOrderByInput>;
  skip?: number;
  take?: number;
};
