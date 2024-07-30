import { Sop as TSop } from "../api/sop/Sop";

export const SOP_TITLE_FIELD = "id";

export const SopTitle = (record: TSop): string => {
  return record.id?.toString() || String(record.id);
};
