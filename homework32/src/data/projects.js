import { projects } from "../sections/Projects";

export const projectsMap = Object.fromEntries(
  projects.map(project => [project.id, project])
);