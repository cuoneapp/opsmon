import { GoalAssignments as TGoalAssignments } from "../api/goalAssignments/GoalAssignments";

export const GOALASSIGNMENTS_TITLE_FIELD = "id";

export const GoalAssignmentsTitle = (record: TGoalAssignments): string => {
  return record.id?.toString() || String(record.id);
};
