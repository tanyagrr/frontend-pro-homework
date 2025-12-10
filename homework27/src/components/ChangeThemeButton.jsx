import { useContext } from "react";
import { themes, ThemeContext } from "../App.jsx";

function ChangeThemeButton() {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "light" ? themes.dark : themes.light);
  };

  return (
    <div className="btn-container">
      <button className="nav-item btn" onClick={handleClick}>
        Change Theme
      </button>
      <span className="theme">{theme === "light" ? "light" : "dark"}</span>
    </div>
  );
}

export default ChangeThemeButton;
