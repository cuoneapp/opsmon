import { MonitoringTaskWhereInput } from "./MonitoringTaskWhereInput";
import { MonitoringTaskOrderByInput } from "./MonitoringTaskOrderByInput";

export type MonitoringTaskFindManyArgs = {
  where?: MonitoringTaskWhereInput;
  orderBy?: Array<MonitoringTaskOrderByInput>;
  skip?: number;
  take?: number;
};
