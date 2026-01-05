import { AppBar, Toolbar, Button, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import Projects from "./ProjectsButton";
import { scrollToSection } from "../helpers/scroll";

export const headerHeight = 64;

function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backgroundColor: "background.default",
        width: "100%",
        height: `${headerHeight}px`,
      }}
    >
      <Box
        sx={{
          width: "90%",
          mx: "auto",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{ fontSize: ".9rem" }}
              onClick={() => scrollToSection("about")}
            >
              About me
            </Button>
            <Button
              sx={{ fontSize: ".9rem" }}
              onClick={() => scrollToSection("skills", 200)}
            >
              Skills
            </Button>
            <Button
              sx={{ fontSize: ".9rem" }}
              onClick={() => scrollToSection("education")}
            >
              Education
            </Button>
          </Box>
          <Box>
            <Projects />
          </Box>
        </Toolbar>
        <Divider />
      </Box>
    </AppBar>
  );
}

export default Header;
