import { WorkInstruction as TWorkInstruction } from "../api/workInstruction/WorkInstruction";

export const WORKINSTRUCTION_TITLE_FIELD = "id";

export const WorkInstructionTitle = (record: TWorkInstruction): string => {
  return record.id?.toString() || String(record.id);
};
