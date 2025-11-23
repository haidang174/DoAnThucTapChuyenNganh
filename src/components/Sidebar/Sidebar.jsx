import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sectionsTop = {
    library: "Thư viện",
    explore: "Khám phá",
    ranking: "Bảng xếp hạng"
  };

  const sectionsBottom = {
    category: "Chủ đề & thể loại",
    recent: "Nghe gần đây",
    favorite: "Bài hát yêu thích",
    playlist: "Playlist",
    album: "Album"
  };

  const getPath = key => {
    switch (key) {
      case "library":
        return "/library";
      case "explore":
        return "/explore";
      case "ranking":
        return "/ranking";
      case "category":
        return "/category";
      case "recent":
        return "/recent";
      case "favorite":
        return "/favorite";
      case "playlist":
        return "/playlist";
      case "album":
        return "/album";
      default:
        return "/";
    }
  };

  const getIconClass = key => {
    switch (key) {
      case "library":
        return "bx-library";
      case "explore":
        return "bx-bolt-circle";
      case "ranking":
        return "bx-trending-up";
      case "category":
        return "bx-category bx-rotate-270";
      case "recent":
        return "bx-history";
      case "favorite":
        return "bxs-heart";
      case "playlist":
        return "bxs-playlist";
      case "album":
        return "bx-album";
      default:
        return "";
    }
  };

  const renderItem = (key, label) => (
    <li key={key} className={`navbar-item ${currentPath === getPath(key) ? "active" : ""}`}>
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
