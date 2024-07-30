import { Announcements as TAnnouncements } from "../api/announcements/Announcements";

export const ANNOUNCEMENTS_TITLE_FIELD = "title";

export const AnnouncementsTitle = (record: TAnnouncements): string => {
  return record.title?.toString() || String(record.id);
};
