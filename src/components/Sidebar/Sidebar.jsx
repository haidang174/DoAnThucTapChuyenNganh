import { Link } from "react-router-dom";
import useSidebar from "../../hooks/sidebar/useSidebar";
import "./Sidebar.css";

const Sidebar = () => {
  const { sectionsTop, sectionsBottom, getPath, getIconClass, isActive } = useSidebar();

  const renderItem = (key, label) => (
    <li key={key} className={`navbar-item ${isActive(key) ? "active" : ""}`}>
      <Link to={getPath(key)} className="nav-link">
        <i className={`bx ${getIconClass(key)}`}></i>
        <span>{label}</span>
      </Link>
    </li>
  );

  return (
    <aside className="sidebar">
      <div className="logo">
        <i className="bx bx-pulse"></i>
        <Link to="/">Music Player</Link>
      </div>

      <nav className="nav">
        <div className="nav-top">
          <ul className="menu">{Object.entries(sectionsTop).map(([key, label]) => renderItem(key, label))}</ul>
        </div>

        <div className="nav-bottom">
          <ul className="menu">{Object.entries(sectionsBottom).map(([key, label]) => renderItem(key, label))}</ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
