import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import AppRoute from "./Components/AppRoute/AppRoute";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.style.setProperty(
      "--background-color",
      `var(--${theme}-background-color)`
    );
    root.style.setProperty("--text-color", `var(--${theme}-text-color)`);
  }, [isDarkMode]);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <AppRoute isDarkMode={darkModeHandler} />
    </div>
  );
}

export default App;
