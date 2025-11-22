import "./MusicPlayer.css";

const LeftPanel = ({ song, isLiked, toggleLike }) => {
  return (
    <div className="left">
      <div className="song-info">
        <div className="poster">
          <img src={song.img} alt={song.title} />
        </div>
      </div>
      <div className="description">
        <h3>{song?.title}</h3>
        <h5>{song?.singer}</h5>
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
