import { AnnouncementsWhereInput } from "./AnnouncementsWhereInput";
import { AnnouncementsOrderByInput } from "./AnnouncementsOrderByInput";

export type AnnouncementsFindManyArgs = {
  where?: AnnouncementsWhereInput;
  orderBy?: Array<AnnouncementsOrderByInput>;
  skip?: number;
  take?: number;
};
