import { createTheme } from "@mui/material/styles";

const common = {
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
};

export const lightTheme = createTheme({
  ...common,
  palette: {
    mode: "light",
    background: {
      default: "#fafafa",
      paper: "#ffffff",
      section2: "#f5f5f5",
      section3: "#f0f0f0",
      section4: "#ededed",
      footer: "#3b2f2a"
    },
    text: {
      primary: "#1f1f1f",
      secondary: "#555",
      footer: "#f5f1ee",
    },
    primary: {
      main: "#1f1f1f",
      contrastText: "#ffffff",
 },
  },
});

export const darkTheme = createTheme({
  ...common,
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#111111",
      section2: "#161616",
      section3: "#1c1c1c",
      section4: "#202020",
      footer: "#ededed",
    },
    text: {
      primary: "#f2f2f2",
      secondary: "#b5b5b5",
      footer: "#1c1c1c",
    },
    primary: {
      main: "#f2f2f2",
      contrastText: "#121212",
 },
  },
});

export const greenTheme = createTheme({
  ...common,
  palette: {
    mode: "light",
    background: {
      default: "#f4f7f3",
      paper: "#ffffff",
      section2: "#eef2ec",
      section3: "#e7ece5",
      section4: "#dde4da",
      footer: "#2f3e34",
    },
    text: {
      primary: "#1f2d25",
      secondary: "#556b5f",
      footer: "#e6efe9",
    },
    primary: {
      main: "#2f3e34",
      contrastText: "#ffffff",
   },
  },
});

