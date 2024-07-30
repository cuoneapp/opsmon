import { TaskAssignment as TTaskAssignment } from "../api/taskAssignment/TaskAssignment";

export const TASKASSIGNMENT_TITLE_FIELD = "id";

export const TaskAssignmentTitle = (record: TTaskAssignment): string => {
  return record.id?.toString() || String(record.id);
};
