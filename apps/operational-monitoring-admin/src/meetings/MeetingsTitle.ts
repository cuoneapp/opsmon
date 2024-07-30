import { Meetings as TMeetings } from "../api/meetings/Meetings";

export const MEETINGS_TITLE_FIELD = "id";

export const MeetingsTitle = (record: TMeetings): string => {
  return record.id?.toString() || String(record.id);
};
