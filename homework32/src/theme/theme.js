import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#f7f5f2",   // milky background
      paper: "#ffffff",
    },

    text: {
      primary: "#111111",
      secondary: "#555555",
    },

    primary: {
      main: "#111111",      // black accents
    },

    secondary: {
      main: "#cfcac2",      // soft beige/gray
    },
  },

  typography: {
    fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;