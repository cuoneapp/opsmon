import { WorkInstructionWhereInput } from "./WorkInstructionWhereInput";
import { WorkInstructionOrderByInput } from "./WorkInstructionOrderByInput";

export type WorkInstructionFindManyArgs = {
  where?: WorkInstructionWhereInput;
  orderBy?: Array<WorkInstructionOrderByInput>;
  skip?: number;
  take?: number;
};
