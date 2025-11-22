import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleThemeToggle = e => {
    const checked = e.target.checked;
    setIsLightTheme(checked);

    const root = document.documentElement;
    const lightColor = getComputedStyle(root).getPropertyValue("--light-theme-color");
    const darkColor = getComputedStyle(root).getPropertyValue("--secondary-color");
    root.style.setProperty("--dark-theme-color", checked ? lightColor : darkColor);
  };

  return (
    <header>
      <div className="header">
        {/* Left Header */}
        <div className="left-header">
          <form className="search" onSubmit={e => e.preventDefault()}>
            <i className="bx bx-search"></i>
            <input type="text" className="form-control" placeholder="Tìm kiếm bài hát ..." />
          </form>
        </div>

        {/* Right Header */}
        <div className="right-header">
          <div className="toggle-switch">
            <label className="switch-label">
              <input type="checkbox" className="checkbox" checked={isLightTheme} onChange={handleThemeToggle} />
              <span className="slider"></span>
            </label>
          </div>

          <div className="profile">
            <i className="bx bxs-user"></i>
          </div>

          <div className="username">
            <a href="#!">User Name</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
