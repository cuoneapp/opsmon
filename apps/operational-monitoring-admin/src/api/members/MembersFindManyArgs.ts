import { MembersWhereInput } from "./MembersWhereInput";
import { MembersOrderByInput } from "./MembersOrderByInput";

export type MembersFindManyArgs = {
  where?: MembersWhereInput;
  orderBy?: Array<MembersOrderByInput>;
  skip?: number;
  take?: number;
};
