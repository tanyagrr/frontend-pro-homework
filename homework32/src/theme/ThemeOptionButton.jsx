import { IconButton, Tooltip } from "@mui/material";

function ThemeOptionButton({ label, icon, selected, onClick }) {
  return (
    <Tooltip title={label}>
      <IconButton
        onClick={onClick}
        size="small"
        sx={{
          borderRadius: "50%",
          transition: "all 0.2s ease",

          bgcolor: selected ? "primary.main" : "background.default",

          color: selected ? "primary.contrastText" : "text.primary",

          boxShadow: selected ? 4 : 1,

          border: "1px solid",
          borderColor: selected ? "transparent" : "divider",

          "&:hover": {
            boxShadow: 6,
            transform: "scale(1.1)",
            bgcolor: selected ? "primary.main" : "action.selected",
          },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default ThemeOptionButton;
