import { KnowledgebaseWhereInput } from "./KnowledgebaseWhereInput";
import { KnowledgebaseOrderByInput } from "./KnowledgebaseOrderByInput";

export type KnowledgebaseFindManyArgs = {
  where?: KnowledgebaseWhereInput;
  orderBy?: Array<KnowledgebaseOrderByInput>;
  skip?: number;
  take?: number;
};
