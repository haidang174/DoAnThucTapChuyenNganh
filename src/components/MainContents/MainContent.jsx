// src/components/MainContents/MainContent.jsx
import useMainContent from "../../hooks/mainContent/useMainContent.js";

import Library from "../Sidebar/sections/Library";
import Explore from "../Sidebar/sections/Explore";
import Ranking from "../Sidebar/sections/Ranking.jsx";
import Categories from "../Sidebar/sections/Categories.jsx";
import Recent from "../Sidebar/sections/Recent.jsx";
import Favorite from "../Sidebar/sections/Favorite.jsx";
import Playlist from "../Sidebar/sections/Playlist.jsx";
import Albums from "../Sidebar/sections/Albums.jsx";

const MainContent = ({ currentUser, onPlaySong, onPlayPlaylist }) => {
  const { path } = useMainContent();

  switch (path) {
    case "/library":
      return <Library currentUser={currentUser} onPlaySong={onPlaySong} />;
    case "/explore":
      return <Explore currentUser={currentUser} onPlaySong={onPlaySong} onPlayPlaylist={onPlayPlaylist} />;
    case "/ranking":
      return <Ranking currentUser={currentUser} onPlaySong={onPlaySong} />;
    case "/category":
      return <Categories currentUser={currentUser} onPlaySong={onPlaySong} />;
    case "/recent":
      return <Recent currentUser={currentUser} onPlaySong={onPlaySong} />;
    case "/favorite":
      return <Favorite currentUser={currentUser} onPlaySong={onPlaySong} />;
    case "/playlist":
      return <Playlist currentUser={currentUser} onPlaySong={onPlaySong} onPlayPlaylist={onPlayPlaylist} />;
    case "/album":
      return <Albums currentUser={currentUser} onPlaySong={onPlaySong} onPlayPlaylist={onPlayPlaylist} />;
    default:
      return <Explore currentUser={currentUser} onPlaySong={onPlaySong} onPlayPlaylist={onPlayPlaylist} />; // mặc định
  }
};

export default MainContent;
