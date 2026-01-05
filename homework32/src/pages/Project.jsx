import { useParams } from "react-router-dom";
import { projectsMap } from "../data/projects";
import { Chip, Container, Stack, Typography } from "@mui/material";

function Project() {
  const { id } = useParams();

  const project = projectsMap[id];

  return (
    <Container>
      <Typography variant="h3">{project.title}</Typography>
      <Typography>{project.description}</Typography>

      <Stack direction="row" spacing={2}>
        {project.stack.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </Stack>
    </Container>
  );
}

export default Project;
