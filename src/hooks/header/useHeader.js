import { useState } from "react";

const useHeader = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleThemeToggle = e => {
    const checked = e.target.checked;
    setIsLightTheme(checked);

    const root = document.documentElement;
    const lightColor = getComputedStyle(root).getPropertyValue("--light-theme-color");
    const darkColor = getComputedStyle(root).getPropertyValue("--secondary-color");

    root.style.setProperty("--dark-theme-color", checked ? lightColor : darkColor);
  };

  return {
    isLightTheme,
    handleThemeToggle
  };
};

export default useHeader;
