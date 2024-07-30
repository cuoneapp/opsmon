import { SignOut as TSignOut } from "../api/signOut/SignOut";

export const SIGNOUT_TITLE_FIELD = "id";

export const SignOutTitle = (record: TSignOut): string => {
  return record.id?.toString() || String(record.id);
};
