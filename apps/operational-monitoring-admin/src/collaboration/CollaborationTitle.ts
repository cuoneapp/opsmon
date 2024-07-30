import { Collaboration as TCollaboration } from "../api/collaboration/Collaboration";

export const COLLABORATION_TITLE_FIELD = "id";

export const CollaborationTitle = (record: TCollaboration): string => {
  return record.id?.toString() || String(record.id);
};
