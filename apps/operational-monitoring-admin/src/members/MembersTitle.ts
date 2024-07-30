import { Members as TMembers } from "../api/members/Members";

export const MEMBERS_TITLE_FIELD = "name";

export const MembersTitle = (record: TMembers): string => {
  return record.name?.toString() || String(record.id);
};
