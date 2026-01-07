import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { headerHeight } from "../layout/Header";
import { projects } from "../data/projects";

function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        width: "100%",
        bgcolor: "background.section4",
        minHeight: `calc(100vh - ${headerHeight}px)`,
        scrollMarginTop: `${headerHeight}px`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        id="projects-anchor"
        sx={{
          height: headerHeight,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 7, fontWeight: 600 }}>
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project) => (
            <Grid key={project.id}>
              <Card
                sx={{
                  width: 340,
                  height: 360,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.screenshots[0]}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    sx={{ fontWeight: 600 }}
                    variant="h5"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {project.short}
                  </Typography>

                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {project.stack.map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions sx={{ width: "100%" }}>
                  <Button
                    component={Link}
                    to={`/projects/${project.id}`}
                    sx={{ mx: "auto", color: "text.primary" }}
                  >
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
