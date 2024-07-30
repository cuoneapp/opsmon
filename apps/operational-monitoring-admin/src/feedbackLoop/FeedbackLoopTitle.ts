import { FeedbackLoop as TFeedbackLoop } from "../api/feedbackLoop/FeedbackLoop";

export const FEEDBACKLOOP_TITLE_FIELD = "id";

export const FeedbackLoopTitle = (record: TFeedbackLoop): string => {
  return record.id?.toString() || String(record.id);
};
