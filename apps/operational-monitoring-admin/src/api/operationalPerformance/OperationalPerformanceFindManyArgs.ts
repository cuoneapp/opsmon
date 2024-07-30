import { OperationalPerformanceWhereInput } from "./OperationalPerformanceWhereInput";
import { OperationalPerformanceOrderByInput } from "./OperationalPerformanceOrderByInput";

export type OperationalPerformanceFindManyArgs = {
  where?: OperationalPerformanceWhereInput;
  orderBy?: Array<OperationalPerformanceOrderByInput>;
  skip?: number;
  take?: number;
};
