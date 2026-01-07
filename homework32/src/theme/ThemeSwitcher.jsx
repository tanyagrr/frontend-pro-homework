import { Fab, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ForestIcon from "@mui/icons-material/Forest";
import { useState } from "react";

function ThemeSwitcher({ value, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Fab
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          backgroundColor: "background.primary",
        }}
      >
        <PaletteIcon />
      </Fab>

      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem
          selected={value === "light"}
          onClick={() => {
            onChange("light");
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <LightModeIcon />
          </ListItemIcon>
          <ListItemText>Light</ListItemText>
        </MenuItem>

        <MenuItem
          selected={value === "dark"}
          onClick={() => {
            onChange("dark");
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <ListItemText>Dark</ListItemText>
        </MenuItem>

        <MenuItem
          selected={value === "green"}
          onClick={() => {
            onChange("green");
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <ForestIcon />
          </ListItemIcon>
          <ListItemText>Green</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

export default ThemeSwitcher;
