import "./MusicPlayer.css";

const PlaylistSidebar = ({ isSidebarOpen, activeTab, setActiveTab, lyrics, playlist, currentIndex, onSelectSong }) => {
  return (
    <div className={`playlist-sidebar ${isSidebarOpen ? "show" : ""}`}>
      {/* Header Tabs */}
      <div className="sidebar-header">
        <div className={`buttons btn-lyrics ${activeTab === "lyrics" ? "active" : ""}`} onClick={() => setActiveTab("lyrics")}>
          <button className="btn">Lời Bài Hát</button>
        </div>
        <div className={`buttons btn-playlist ${activeTab === "playlist" ? "active" : ""}`} onClick={() => setActiveTab("playlist")}>
          <button className="btn">Danh sách phát</button>
        </div>
      </div>

      {/* Content */}
      <div className="sidebar-content">
        {/* Lyrics */}
        <section className={`section lyrics ${activeTab === "lyrics" ? "" : "hidden"}`}>{lyrics}</section>

        {/* Playlist */}
        <section className={`section playlist ${activeTab === "playlist" ? "" : "hidden"}`}>
          <div className="playlist-list">
            {playlist.map((song, index) => (
              <div key={index} className={`playlist-item ${currentIndex === index ? "active" : ""}`} onClick={() => onSelectSong(index)}>
                <img src={song.img} alt={song.title} className="playlist-item-img" />
                <div className="playlist-item-info">
                  <p className="playlist-item-title">{song.title}</p>
                  <p className="playlist-item-singer">{song.singer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlaylistSidebar;
