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
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={5} sx={{ alignItems: "center" }}>
          <Typography
            variant="h1"
            align="center"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Tania Herasymenko
          </Typography>
          <Divider sx={{ width: "60%" }} />
          <Typography align="center" variant="body1" sx={{ lineHeight: 1.7 }}>
            Motivated junior frontend developer with comprehensive training in
            JavaScript, React, and modern web development practices. Completed
            intensive coursework and built multiple projects demonstrating
            proficiency in DOM manipulation, API integration, and responsive
            design. Eager to apply technical skills and problem solving
            abilities to contribute to a development team.Motivated junior
            frontend developer with comprehensive training in JavaScript, React,
            and modern web development practices. Completed intensive coursework
            and built multiple projects demonstrating proficiency in DOM
            manipulation, API integration, and responsive design. Eager to apply
            technical skills and problem solving abilities to contribute to a
            development team.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
