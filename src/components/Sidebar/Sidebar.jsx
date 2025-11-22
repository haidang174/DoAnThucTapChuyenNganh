import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("Khám phá");

  const handleNavClick = name => {
    setActiveSection(name);
  };

  const getIconClass = name => {
    switch (name) {
      case "Thư viện":
        return "bx-library";
      case "Khám phá":
        return "bx-bolt-circle";
      case "Bảng xếp hạng":
        return "bx-trending-up";
      case "Chủ đề & thể loại":
        return "bx-category bx-rotate-270";
      case "Nghe gần đây":
        return "bx-history";
      case "Bài hát yêu thích":
        return "bxs-heart";
      case "Playlist":
        return "bxs-playlist";
      case "Album":
        return "bx-album";
      default:
        return "";
    }
  };

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo">
        <i className="bx bx-pulse"></i>
        <a href="#!">Music Player</a>
      </div>

      {/* Nav */}
      <nav className="nav">
        {/* Nav top */}
        <div className="nav-top">
          <ul className="menu">
            {["Thư viện", "Khám phá", "Bảng xếp hạng"].map(name => (
              <li key={name} className={`navbar-item ${activeSection === name ? "active" : ""}`}>
                <a
                  href="#!"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(name);
                  }}
                >
                  <i className={`bx ${getIconClass(name)}`}></i>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav bottom */}
        <div className="nav-bottom">
          <ul className="menu">
            {["Chủ đề & thể loại", "Nghe gần đây", "Bài hát yêu thích", "Playlist", "Album"].map(name => (
              <li key={name} className={`navbar-item ${activeSection === name ? "active" : ""}`}>
                <a
                  href="#!"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(name);
                  }}
                >
                  <i className={`bx ${getIconClass(name)}`}></i>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
