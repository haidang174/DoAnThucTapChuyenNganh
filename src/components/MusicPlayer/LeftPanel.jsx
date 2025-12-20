// src/components/MusicPlayer/LeftPanel.jsx
import "./MusicPlayer.css";

const LeftPanel = ({ song, isLiked, toggleLike }) => {
  // Nếu không có song, hiển thị placeholder
  if (!song) {
    return (
      <div className="left">
        <div className="song-info">
          <div className="poster">
            <img src="/assets/icon/pulse.png" alt="No song" />
          </div>
        </div>
        <div className="description">
          <h3>Chưa có bài hát</h3>
          <h5>---</h5>
        </div>
        <div className="interact">
          <button className="btn like-btn">
            <i className="bx bx-heart"></i>
            <i className="bx bxs-heart"></i>
          </button>
        </div>
      </div>
    );
  }

  // Lấy giá trị với fallback
  const thumbnail = song.img || song.Avatar || "/assets/icon/pulse.png";
  const title = song.title || song.Title || "Unknown";
  const artist = song.singer || song.Artists || "Unknown Artist";

  return (
    <div className="left">
      <div className="song-info">
        <div className="poster">
          <img src={thumbnail} alt={title} />
        </div>
      </div>
      <div className="description">
        <h3>{title}</h3>
        <h5>{artist}</h5>
      </div>
      <div className="interact">
        <button className={`btn like-btn ${isLiked ? "active" : ""}`} onClick={toggleLike}>
          <i className="bx bx-heart"></i>
          <i className="bx bxs-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
