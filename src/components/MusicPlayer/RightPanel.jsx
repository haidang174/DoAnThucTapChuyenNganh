import { useRef, useEffect } from "react";
import "./MusicPlayer.css";

const RightPanel = ({ volume, setVolume, toggleSidebar, isSidebarOpen }) => {
  const volumeRef = useRef(null);

  useEffect(() => {
    if (volumeRef.current) {
      volumeRef.current.style.background = `linear-gradient(to right, #f72585 0%, #f72585 ${volume}%, #fff ${volume}%, #fff 100%)`;
    }
  }, [volume]);

  const handleVolumeChange = value => {
    setVolume(value);
  };

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
