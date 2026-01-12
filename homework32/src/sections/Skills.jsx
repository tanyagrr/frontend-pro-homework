import { Box, Chip, Container, Stack, Typography } from "@mui/material";

const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Git",
  "Github",
  "Tailwind",
  "Redux",
  "Redux ToolKit",
  "Redux-Thunk",
  "Redux-Saga",
  "Express.js",
  "REST API",
  "Vitest",
  "Material UI",
];

function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        backgroundColor: "background.section2",
        width: "100%",
        py: { xs: 8, md: 1 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 10 },
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 600 }}>
          Skills
        </Typography>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 3 }}
          rowGap={{ xs: 2, sm: 3 }}
          columnGap={1}
          flexWrap="wrap"
          justifyContent="center"
        >
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                fontSize: "1rem",
                height: 42,
                px: 2,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: 1,
                transition: "all 0.2s ease",
                "&:hover": {
                  boxShadow: 3,
                  transform: "translateY(-2px)",
                  bgcolor: "action.hover",
                  cursor: "default",
                },
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Skills;
