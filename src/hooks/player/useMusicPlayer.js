// src/components/MusicPlayer/useMusicPlayer.js
import { useState, useRef, useEffect } from "react";

const useMusicPlayer = playlist => {
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

  const audioRef = useRef(null);
  const currentSong = playlist[currentIndex];

  // ---------- Load / change song ----------
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;

    audio.src = currentSong.src;
    audio.load();

    if (isPlaying) {
      audio.play().catch(err => console.error(err));
    }
  }, [currentIndex, currentSong]);

  // ---------- Play / Pause ----------
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(err => console.error(err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    setIsPlaying(prev => !prev);
  };

  // ---------- Next / Previous ----------
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

  // ---------- Shuffle / Repeat ----------
  const toggleShuffle = () => setIsShuffle(prev => !prev);
  const toggleRepeat = () => setIsRepeat(prev => !prev);

  // ---------- Progress ----------
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
  }, [isRepeat, currentIndex]);

  const handleProgressChange = value => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // ---------- Volume ----------
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
    localStorage.setItem("volume", volume);
  }, [volume]);

  // ---------- Like ----------
  const toggleLike = () => setIsLiked(prev => !prev);

  // ---------- Sidebar ----------
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return {
    audioRef,
    currentSong,
    currentIndex,
    isPlaying,
    isLiked,
    isShuffle,
    isRepeat,
    volume,
    currentTime,
    duration,
    isSidebarOpen,
    activeTab,

    setVolume,
    setActiveTab,
    setCurrentIndex,

    togglePlayPause,
    playNext,
    playPrevious,
    toggleShuffle,
    toggleRepeat,
    handleProgressChange,
    toggleLike,
    toggleSidebar,
    setIsPlaying
  };
};

export default useMusicPlayer;
