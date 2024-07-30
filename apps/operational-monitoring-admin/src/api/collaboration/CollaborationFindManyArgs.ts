import { CollaborationWhereInput } from "./CollaborationWhereInput";
import { CollaborationOrderByInput } from "./CollaborationOrderByInput";

export type CollaborationFindManyArgs = {
  where?: CollaborationWhereInput;
  orderBy?: Array<CollaborationOrderByInput>;
  skip?: number;
  take?: number;
};
