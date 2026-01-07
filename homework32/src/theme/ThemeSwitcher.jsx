import { Box, Fab, Menu, Stack } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ForestIcon from "@mui/icons-material/Forest";
import { useState } from "react";
import ThemeOptionButton from "./ThemeOptionButton";

function ThemeSwitcher({ value, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Menu
        sx={{ mt: -0.5 }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              px: 1.5,
              py: 1,
              borderRadius: 4,
            },
          },
        }}
      >
        <Stack direction="row" spacing={1}>
          <ThemeOptionButton
            label="Light"
            icon={<LightModeIcon fontSize="small" />}
            selected={value === "light"}
            onClick={() => onChange("light")}
          />
          <ThemeOptionButton
            label="Dark"
            icon={<DarkModeIcon fontSize="small" />}
            selected={value === "dark"}
            onClick={() => onChange("dark")}
          />
          <ThemeOptionButton
            label="Green"
            icon={<ForestIcon fontSize="small" />}
            selected={value === "green"}
            onClick={() => onChange("green")}
          />
        </Stack>
      </Menu>

      <Fab
        size="small"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          mt: 1,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          boxShadow: 3,
          transition: "all 0.25s ease",
          "&:hover": {
            boxShadow: 8,
            transform: "scale(1.08)",
            bgcolor: "text.secondary",
            color: "primary.contrastText",
          },
          "&:active": {
            transform: "scale(0.96)",
          },
        }}
      >
        <PaletteIcon fontSize="small" />
      </Fab>
    </Box>
  );
}

export default ThemeSwitcher;
