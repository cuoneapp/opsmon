import { Projects as TProjects } from "../api/projects/Projects";

export const PROJECTS_TITLE_FIELD = "name";

export const ProjectsTitle = (record: TProjects): string => {
  return record.name?.toString() || String(record.id);
};
