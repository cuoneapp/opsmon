import { Forms as TForms } from "../api/forms/Forms";

export const FORMS_TITLE_FIELD = "id";

export const FormsTitle = (record: TForms): string => {
  return record.id?.toString() || String(record.id);
};
