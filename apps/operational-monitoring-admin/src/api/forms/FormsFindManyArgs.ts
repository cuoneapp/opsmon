import { FormsWhereInput } from "./FormsWhereInput";
import { FormsOrderByInput } from "./FormsOrderByInput";

export type FormsFindManyArgs = {
  where?: FormsWhereInput;
  orderBy?: Array<FormsOrderByInput>;
  skip?: number;
  take?: number;
};
