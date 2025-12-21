// src/components/Sidebar/sections/Recent.jsx
import useRecent from "../../../hooks/sidebar/section/useRecent";
import "./Recent.css";

const Recent = ({ currentUser, onPlaySong }) => {
  const { recentSongs, isLoading, error, loadRecentSongs, handlePlaySong, formatDuration } = useRecent(currentUser);

  // Loading state
  if (isLoading) {
    return (
      <div className="recent-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Đang tải lịch sử nghe...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="recent-container">
        <div className="error-message">
          <p>❌ Lỗi: {error}</p>
          <button onClick={loadRecentSongs} className="retry-button">
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (recentSongs.length === 0) {
    return (
      <div className="recent-container">
        <div className="empty-state">
          <div className="empty-icon">🎵</div>
          <h2>Chưa có lịch sử nghe</h2>
          <p>Bắt đầu nghe nhạc để xem lịch sử của bạn ở đây!</p>
        </div>
      </div>
    );
  }

  // Main content
  return (
    <div className="recent-container">
      {/* Table */}
      <div className="recent-table">
        {/* Table Header */}
        <div className="table-header">
          <div className="col-song">Bài hát</div>
          <div className="col-album">Album</div>
          <div className="col-duration">Thời gian</div>
        </div>

        {/* Table Body */}
        <div className="table-body">
          {recentSongs.map((song, index) => (
            <div key={`${song.IDSong}-${index}`} className="table-row" onClick={() => handlePlaySong(onPlaySong, song, index)}>
              {/* Column 1: Ảnh + Tên bài hát + Nghệ sĩ */}
              <div className="col-song">
                <div className="song-thumbnail">
                  <img
                    src={song.Avatar || "/assets/icon/pulse.png"}
                    alt={song.Title}
                    onError={e => {
                      e.target.src = "/assets/icon/pulse.png";
                    }}
                  />
                  <button
                    className="play-overlay"
                    onClick={e => {
                      e.stopPropagation();
                      handlePlaySong(onPlaySong, song, index);
                    }}
                    aria-label={`Phát ${song.Title}`}
                  >
                    ▶
                  </button>
                </div>
                <div className="song-details">
                  <h3 className="song-title">{song.Title}</h3>
                  <p className="song-artist">{song.Artists}</p>
                </div>
              </div>

              {/* Column 2: Album */}
              <div className="col-album">{song.Album ? song.Album.Name : "—"}</div>

              {/* Column 3: Duration */}
              <div className="col-duration">{formatDuration(song.Duration)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
