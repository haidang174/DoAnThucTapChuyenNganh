import { useState, useRef, useEffect } from "react";
import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";
import PlaylistSidebar from "./PlaylistSidebar";
import "./MusicPlayer.css";

const MusicPlayer = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem("volume");
    return saved !== null ? parseInt(saved) : 70;
  });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("lyrics");
  const [comments, setComments] = useState([]);

  const audioRef = useRef(null);

  const currentSong = playlist[currentIndex];

  // ---------------- Load / Play song ----------------
  useEffect(() => {
    if (!audioRef.current || !currentSong) return;

    audioRef.current.src = currentSong.src;
    audioRef.current.load();
    audioRef.current.volume = volume / 100;

    if (isPlaying) {
      audioRef.current.play().catch(err => console.error("Lỗi phát nhạc:", err));
    }
  }, [currentIndex, currentSong, isPlaying, volume]);

  // ---------------- Play / Pause ----------------
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => console.error("Lỗi phát nhạc:", err));
      setIsPlaying(true);
    }
  };

  // ---------------- Next / Previous ----------------
  const playNext = () => {
    if (!playlist.length) return;

    if (isShuffle) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * playlist.length);
      } while (newIndex === currentIndex && playlist.length > 1);
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(prev => (prev + 1) % playlist.length);
    }
    setIsPlaying(true);
  };

  const playPrevious = () => {
    if (!playlist.length) return;

    setCurrentIndex(prev => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  // ---------------- Shuffle / Repeat ----------------
  const toggleShuffle = () => setIsShuffle(prev => !prev);
  const toggleRepeat = () => setIsRepeat(prev => !prev);

  // ---------------- Progress Bar ----------------
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play().catch(err => console.error(err));
      } else {
        playNext();
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isRepeat, currentIndex, playlist]);

  const handleProgressChange = value => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // ---------------- Volume ----------------
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
    localStorage.setItem("volume", volume);
  }, [volume]);

  // ---------------- Like ----------------
  const toggleLike = () => setIsLiked(prev => !prev);

  // ---------------- Sidebar ----------------
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  // ---------------- Comments ----------------
  const addComment = text => setComments(prev => [...prev, text]);

  return (
    <div className="music-player">
      <LeftPanel song={currentSong} isLiked={isLiked} toggleLike={toggleLike} />
      <CenterPanel
        audioRef={audioRef}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        playNext={playNext}
        playPrevious={playPrevious}
        isShuffle={isShuffle}
        toggleShuffle={toggleShuffle}
        isRepeat={isRepeat}
        toggleRepeat={toggleRepeat}
        currentTime={currentTime}
        duration={duration}
        handleProgressChange={handleProgressChange}
      />
      <RightPanel volume={volume} setVolume={setVolume} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <PlaylistSidebar
        isSidebarOpen={isSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lyrics={currentSong.lyrics}
        comments={comments}
        addComment={addComment}
      />
    </div>
  );
};

export default MusicPlayer;
