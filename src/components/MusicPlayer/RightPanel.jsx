import useRightPanel from "../../hooks/player/useRightPanel";
import "./MusicPlayer.css";

const RightPanel = ({ volume, setVolume, toggleSidebar, isSidebarOpen }) => {
  const { volumeRef, handleVolumeChange } = useRightPanel(volume, setVolume);

  return (
    <div className="right">
      <div className="buttons">
        <button className="btn">
          <i className="bx bx-volume-full"></i>
          <input ref={volumeRef} type="range" className="volume-bar" min="0" max="100" step="1" value={volume} onChange={e => handleVolumeChange(e.target.value)} />
        </button>

        <button className="btn" onClick={toggleSidebar}>
          <i className={`bx bxs-playlist ${isSidebarOpen ? "active" : ""}`}></i>
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
