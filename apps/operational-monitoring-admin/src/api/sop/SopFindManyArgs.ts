import { SopWhereInput } from "./SopWhereInput";
import { SopOrderByInput } from "./SopOrderByInput";

export type SopFindManyArgs = {
  where?: SopWhereInput;
  orderBy?: Array<SopOrderByInput>;
  skip?: number;
  take?: number;
};
