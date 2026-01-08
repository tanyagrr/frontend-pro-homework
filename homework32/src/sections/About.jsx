import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { headerHeight } from "../layout/Header";

function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        backgroundColor: "background.default",
        width: "100%",
        scrollMarginTop: `${headerHeight}px`,
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "center" }}>
          <Typography
            variant="h1"
            align="center"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 600,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Tania Herasymenko
          </Typography>
          <Divider sx={{ width: { xs: "40%", sm: "50%", md: "60%" } }} />
          <Stack spacing={{ xs: 2.5, md: 3 }}>
            <Typography
              align="center"
              variant="body1"
              sx={{ lineHeight: 1.7, fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              Motivated junior frontend developer with comprehensive training in
              JavaScript, React, and modern web development practices. Completed
              intensive coursework and built multiple projects demonstrating
              proficiency in DOM manipulation, API integration, state
              management, and responsive, accessible design.
            </Typography>

            <Typography
              align="center"
              variant="body1"
              sx={{ lineHeight: 1.7, fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              Prior to transitioning into frontend development, worked as a
              self-employed English tutor, interpreter, and museum guide. These
              roles strengthened communication skills, adaptability, attention
              to detail, and the ability to explain complex ideas clearly —
              skills that translate directly into writing maintainable code,
              collaborating with teams, and building user-friendly interfaces.
            </Typography>

            <Typography
              align="center"
              variant="body1"
              sx={{ lineHeight: 1.7, fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              Highly organized, self-disciplined, and comfortable working
              independently or as part of a team. Eager to grow as a frontend
              developer, learn from experienced engineers, and contribute
              thoughtfully to real-world products.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
