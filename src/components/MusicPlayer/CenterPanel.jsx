import "./MusicPlayer.css";
import useCenterPanel from "../../hooks/player/useCenterPanel";

const CenterPanel = ({
  audioRef,
  isPlaying,
  togglePlayPause,
  playNext,
  playPrevious,
  isShuffle,
  toggleShuffle,
  isRepeat,
  toggleRepeat,
  currentTime,
  duration,
  handleProgressChange
}) => {
  const { progressRef, formatTime } = useCenterPanel(currentTime, duration);

  return (
    <div className="center">
      <div className="player-actions">
        <div className="buttons">
          <button className={`btn btn1 ${isRepeat ? "active" : ""}`} onClick={toggleRepeat}>
            <i className="bx bx-repeat"></i>
          </button>

          <button className="btn btn1" onClick={playPrevious}>
            <i className="bx bx-first-page"></i>
          </button>

          <button className={`btn pause-play ${isPlaying ? "active" : ""}`} onClick={togglePlayPause}>
            <i className="bx bx-play-circle"></i>
            <i className="bx bx-pause-circle"></i>
          </button>

          <button className="btn btn1" onClick={playNext}>
            <i className="bx bx-last-page"></i>
          </button>

          <button className={`btn btn1 ${isShuffle ? "active" : ""}`} onClick={toggleShuffle}>
            <i className="bx bx-shuffle"></i>
          </button>
        </div>
      </div>

      <div className="progress">
        <span className="current-time">{formatTime(currentTime)}</span>

        <input
          ref={progressRef}
          type="range"
          className="progress-bar"
          value={currentTime}
          min="0"
          max={duration || 0}
          step="0.1"
          onChange={e => handleProgressChange(e.target.value)}
        />

        <span className="duration">{formatTime(duration)}</span>

        <audio ref={audioRef}></audio>
      </div>
    </div>
  );
};

export default CenterPanel;
