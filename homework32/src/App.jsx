import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lightTheme, darkTheme, greenTheme } from "./theme/themes";
import ThemeSwitcher from "./theme/ThemeSwitcher";
import Layout from "./layout/Layout";
import Project from "./pages/Project";
import Home from "./pages/Home";
import ScrollToTop from "./helpers/ScrollToTop";
import { useState } from "react";

const themes = {
  light: lightTheme,
  dark: darkTheme,
  green: greenTheme,
};

function App() {
  const [themeName, setThemeName] = useState("green");

  return (
    <ThemeProvider theme={themes[themeName]}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
          </Routes>
        </Layout>
        <ThemeSwitcher value={themeName} onChange={setThemeName} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
