import { Knowledgebase as TKnowledgebase } from "../api/knowledgebase/Knowledgebase";

export const KNOWLEDGEBASE_TITLE_FIELD = "id";

export const KnowledgebaseTitle = (record: TKnowledgebase): string => {
  return record.id?.toString() || String(record.id);
};
