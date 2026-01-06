import About from "../sections/About";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../helpers/scroll";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToSection(id);
    }
  }, [location]);

  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}

export default Home;
