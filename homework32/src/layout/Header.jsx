import { AppBar, Toolbar, Button, Box, Divider } from "@mui/material";
import { scrollToSection } from "../helpers/scroll";
import { useLocation, useNavigate } from "react-router-dom";

export const headerHeight = 64;

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };
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
              sx={{ fontSize: ".9rem", color: "text.primary" }}
              onClick={() => handleNavClick("about")}
            >
              About me
            </Button>
            <Button
              sx={{ fontSize: ".9rem", color: "text.primary" }}
              onClick={() => handleNavClick("skills", 190)}
            >
              Skills
            </Button>
            <Button
              sx={{ fontSize: ".9rem", color: "text.primary" }}
              onClick={() => handleNavClick("education")}
            >
              Education
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{ fontSize: ".9rem", color: "text.primary" }}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </Button>
            <Button
              sx={{ fontSize: ".9rem", color: "text.primary" }}
              onClick={() => handleNavClick("contact")}
            >
              Contact me
            </Button>
          </Box>
        </Toolbar>
        <Divider />
      </Box>
    </AppBar>
  );
}

export default Header;
