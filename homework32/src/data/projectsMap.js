import { projects } from "../data/projects";

export const projectsMap = Object.fromEntries(
  projects.map(project => [project.id, project])
);