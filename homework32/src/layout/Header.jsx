import { scrollToSection } from "../helpers/scroll";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";

export const headerHeight = 64;

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuAnchor, setMenuAnchor] = useState(null);

  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);

    if (el) {
      window.history.replaceState(null, "", `#${sectionId}`);
      scrollToSection(sectionId);
      return;
    }

    navigate(`/#${sectionId}`);
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
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, sm: 2 } }}>
          {isMobile && (
            <IconButton
              edge="end"
              onClick={(e) => setMenuAnchor(e.currentTarget)}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
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
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
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
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => setMenuAnchor(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {[
            { label: "About me", id: "about" },
            { label: "Skills", id: "skills" },
            { label: "Education", id: "education" },
            { label: "Projects", id: "projects" },
            { label: "Contact me", id: "contact" },
          ].map((item) => (
            <MenuItem
              key={item.id}
              sx={{
                my: -1,
                fontSize: ".8rem",
                bgcolor: "background.default",
                py: 1.5,
              }}
              onClick={() => {
                handleNavClick(item.id);
                setMenuAnchor(null);
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>

        <Divider />
      </Box>
    </AppBar>
  );
}

export default Header;
