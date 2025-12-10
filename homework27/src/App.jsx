import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contacts from "./components/Contacts.jsx";
import NotFound from "./components/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

export const ThemeContext = createContext();

export const themes = {
  light: "light",
  dark: "dark",
};

function App() {
  const theme = useState(themes.light);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <ErrorBoundary>
            <Header />
            <main>
              <Routes>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about-me" element={<AboutMe />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
              </Routes>
            </main>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
