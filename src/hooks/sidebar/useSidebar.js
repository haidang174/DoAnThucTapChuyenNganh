import { useLocation } from "react-router-dom";

const useSidebar = () => {
  const { pathname: currentPath } = useLocation();

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

  const pathMap = {
    library: "/library",
    explore: "/explore",
    ranking: "/ranking",
    category: "/category",
    recent: "/recent",
    favorite: "/favorite",
    playlist: "/playlist",
    album: "/album"
  };

  const iconMap = {
    library: "bx-library",
    explore: "bx-bolt-circle",
    ranking: "bx-trending-up",
    category: "bx-category bx-rotate-270",
    recent: "bx-history",
    favorite: "bxs-heart",
    playlist: "bxs-playlist",
    album: "bx-album"
  };

  const getPath = key => pathMap[key] || "/";
  const getIconClass = key => iconMap[key] || "";

  const isActive = key => currentPath === getPath(key);

  return {
    sectionsTop,
    sectionsBottom,
    getPath,
    getIconClass,
    isActive
  };
};

export default useSidebar;
