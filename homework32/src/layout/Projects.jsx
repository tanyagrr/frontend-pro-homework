import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const menuItemSx = {
  fontSize: "0.9rem",
  py: 0.75,
  px: 2,
  borderRadius: 1,
  "&:hover": {
    bgcolor: "action.hover",
  },
};

function ProjectsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{ fontSize: ".9rem" }}
        endIcon={<ExpandMoreIcon />}
        color="inherit"
        onClick={handleOpen}
      >
        Projects
      </Button>

      <Menu
        slotProps={{
          paper: {
            sx: {
              bgcolor: "background.paper",
              borderRadius: 1,
              mt: 1,
              minWidth: 180,
              py: 0.5,
            },
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem
          sx={menuItemSx}
          component={Link}
          to="/projects/todo"
          onClick={handleClose}
        >
          Todo App
        </MenuItem>
        <MenuItem
          sx={menuItemSx}
          component={Link}
          to="/projects/swapi"
          onClick={handleClose}
        >
          SWAPI Viewer
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProjectsMenu;
