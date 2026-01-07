import { Box, Chip, Container, Stack, Typography } from "@mui/material";

const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Redux",
  "Redux ToolKit",
  "Redux-Thunk",
  "Redux Saga",
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
        py: 8,
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
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 600 }}>
          Skills
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          rowGap={3}
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
