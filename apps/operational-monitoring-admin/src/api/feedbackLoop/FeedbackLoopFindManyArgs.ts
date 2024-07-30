import { FeedbackLoopWhereInput } from "./FeedbackLoopWhereInput";
import { FeedbackLoopOrderByInput } from "./FeedbackLoopOrderByInput";

export type FeedbackLoopFindManyArgs = {
  where?: FeedbackLoopWhereInput;
  orderBy?: Array<FeedbackLoopOrderByInput>;
  skip?: number;
  take?: number;
};
