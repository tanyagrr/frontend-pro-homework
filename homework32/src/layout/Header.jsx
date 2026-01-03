import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Projects from "./Projects";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "text.primary",
            fontWeight: 700,
          }}
        >
          Tanya G
        </Typography> */}

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            sx={{ fontSize: ".9rem" }}
            component={Link}
            to="/"
            color="inherit"
          >
            About me
          </Button>
          <Button
            sx={{ fontSize: ".9rem" }}
            component={Link}
            to="/skills"
            color="inherit"
          >
            Skills
          </Button>
          <Button
            sx={{ fontSize: ".9rem" }}
            component={Link}
            to="/education"
            color="inherit"
          >
            Education
          </Button>
        </Box>
        <Box>
          <Projects />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
