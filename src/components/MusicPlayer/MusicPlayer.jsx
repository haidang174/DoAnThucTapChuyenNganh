import useMusicPlayer from "../../hooks/player/useMusicPlayer";

import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";
import PlaylistSidebar from "./PlaylistSidebar";
import "./MusicPlayer.css";

const MusicPlayer = ({ playlist }) => {
  const player = useMusicPlayer(playlist);

  return (
    <div className="music-player">
      <LeftPanel song={player.currentSong} isLiked={player.isLiked} toggleLike={player.toggleLike} />

      <CenterPanel
        audioRef={player.audioRef}
        isPlaying={player.isPlaying}
        togglePlayPause={player.togglePlayPause}
        playNext={player.playNext}
        playPrevious={player.playPrevious}
        isShuffle={player.isShuffle}
        toggleShuffle={player.toggleShuffle}
        isRepeat={player.isRepeat}
        toggleRepeat={player.toggleRepeat}
        currentTime={player.currentTime}
        duration={player.duration}
        handleProgressChange={player.handleProgressChange}
      />

      <RightPanel volume={player.volume} setVolume={player.setVolume} toggleSidebar={player.toggleSidebar} isSidebarOpen={player.isSidebarOpen} />

      <PlaylistSidebar
        isSidebarOpen={player.isSidebarOpen}
        activeTab={player.activeTab}
        setActiveTab={player.setActiveTab}
        lyrics={player.currentSong?.lyrics}
        playlist={playlist}
        currentIndex={player.currentIndex}
        onSelectSong={index => {
          player.setCurrentIndex(index);
          player.setIsPlaying(true);
        }}
      />
    </div>
  );
};

export default MusicPlayer;
