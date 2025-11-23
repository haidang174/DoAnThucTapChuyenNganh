import { useLocation } from "react-router-dom";
import Library from "../Sidebar/sections/Library";
import Explore from "../Sidebar/sections/Explore";
import Ranking from "../Sidebar/sections/Ranking.jsx";
import Categories from "../Sidebar/sections/Categories.jsx";
import Recent from "../Sidebar/sections/Recent.jsx";
import Favorite from "../Sidebar/sections/Favorite.jsx";
import Playlist from "../Sidebar/sections/Playlist.jsx";
import Albums from "../Sidebar/sections/Albums.jsx";

const MainContent = () => {
  const location = useLocation();
  const path = location.pathname;

  switch (path) {
    case "/library":
      return <Library />;
    case "/explore":
      return <Explore />;
    case "/ranking":
      return <Ranking />;
    case "/category":
      return <Categories />;
    case "/recent":
      return <Recent />;
    case "/favorite":
      return <Favorite />;
    case "/playlist":
      return <Playlist />;
    case "/album":
      return <Albums />;
    default:
      return <Explore />; // mặc định
  }
};

export default MainContent;
