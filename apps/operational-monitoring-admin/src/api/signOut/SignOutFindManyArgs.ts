import { SignOutWhereInput } from "./SignOutWhereInput";
import { SignOutOrderByInput } from "./SignOutOrderByInput";

export type SignOutFindManyArgs = {
  where?: SignOutWhereInput;
  orderBy?: Array<SignOutOrderByInput>;
  skip?: number;
  take?: number;
};
