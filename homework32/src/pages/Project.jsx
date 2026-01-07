import { useParams } from "react-router-dom";
import { projectsMap } from "../data/projectsMap";
import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { headerHeight } from "../layout/Header";

function Project() {
  const { id } = useParams();
  const project = projectsMap[id];
  const navigate = useNavigate();

  if (!project) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4">Project not found</Typography>
      </Container>
    );
  }

  return (
    <Box component="section" sx={{ py: 3 }}>
      <Container
        maxWidth="lg"
        sx={{ minHeight: `calc(90vh - ${headerHeight}px)` }}
      >
        <Button
          startIcon={<ArrowBackIosNewIcon />}
          onClick={() => navigate("/#projects")}
          sx={{
            alignSelf: "flex-start",
            mb: 3,
            textTransform: "none",
            fontSize: "0.9rem",
            color: "text.secondary",
          }}
        >
          Back to projects
        </Button>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              {project.screenshots.map((src, index) => (
                <Box
                  key={index}
                  component="img"
                  src={src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h2" sx={{ fontWeight: 600, mb: 2 }}>
              {project.title}
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4 }}>
              {project.long}
            </Typography>

            <Typography variant="overline" sx={{ mb: 1, display: "block" }}>
              Tech stack
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4 }}>
              {project.stack.map((tech) => (
                <Chip key={tech} label={tech} />
              ))}
            </Stack>

            <Stack direction="row" spacing={2}>
              {project.demo && (
                <Button
                  variant="contained"
                  size="large"
                  href={project.demo}
                  target="_blank"
                >
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button
                  variant="outlined"
                  size="large"
                  href={project.github}
                  target="_blank"
                >
                  GitHub
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Project;
