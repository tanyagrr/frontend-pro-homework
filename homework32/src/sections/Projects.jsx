import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const projects = [
  {
    id: "todo-app",
    title: "Todo App",
    short: "Task manager with Redux Toolkit",
    stack: ["React", "Redux", "MUI"],
  },
  {
    id: "swapi",
    title: "SWAPI Viewer",
    short: "Star Wars API explorer",
    stack: ["React", "REST API"],
  },
];

function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ width: "100%", bgcolor: "background.section3", py: 15 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.id}>
              <Card>
                <CardContent>
                  <Typography sx={{ fontWeight: 600 }} variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.short}</Typography>
                </CardContent>

                <CardActions>
                  <Button component={Link} to={`/projects/${project.id}`}>
                    View project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
