// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContents/MainContent";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Import mock data
import { mockSongs, formatSongsForPlayer } from "./data/mockData";
import { loginService, registerService } from "./services/mockServices";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // State cho music player
  const [playlist, setPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Playlist mặc định từ mockSongs
  useEffect(() => {
    const defaultPlaylist = formatSongsForPlayer(mockSongs);
    setPlaylist(defaultPlaylist);
  }, []);

  /**
   * Xử lý đăng nhập
   */
  const handleLogin = async ({ username, password }) => {
    try {
      setIsLoading(true);
      setError(null);

      // Gọi mock login service
      const response = await loginService(username, password);

      if (response.success) {
        setCurrentUser(response.data.user);
        setIsLoggedIn(true);

        // Lưu token vào localStorage (giả lập)
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("currentUser", JSON.stringify(response.data.user));

        console.log("Đăng nhập thành công:", response.data.user);
      }
    } catch (err) {
      setError(err.message);
      console.error("Lỗi đăng nhập:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Xử lý đăng ký
   */
  const handleRegister = async ({ username, email, password, birthDate }) => {
    try {
      setIsLoading(true);
      setError(null);

      // Gọi mock register service
      const response = await registerService({ username, email, password, birthDate });

      if (response.success) {
        setCurrentUser(response.data.user);
        setIsLoggedIn(true);

        // Lưu token vào localStorage (giả lập)
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("currentUser", JSON.stringify(response.data.user));

        console.log("Đăng ký thành công:", response.data.user);
      }
    } catch (err) {
      setError(err.message);
      console.error("Lỗi đăng ký:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Xử lý đăng xuất
   */
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
    console.log("Đã đăng xuất");
  };

  /**
   * Check token khi load app (auto-login nếu có token)
   */
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("currentUser");

    if (token && savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
        setIsLoggedIn(true);
        console.log("Auto-login thành công:", user);
      } catch (err) {
        console.error("Lỗi parse user data:", err);
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
      }
    }
  }, []);

  /**
   * Phát một bài hát từ danh sách
   */
  const handlePlaySong = (newPlaylist, index = 0) => {
    setPlaylist(newPlaylist);
    setCurrentSongIndex(index);
    console.log(`🎵 Phát bài: ${newPlaylist[index]?.title}`);
  };

  /**
   * Phát playlist/album
   */
  const handlePlayPlaylist = (newPlaylist, startIndex = 0) => {
    setPlaylist(newPlaylist);
    setCurrentSongIndex(startIndex);
    console.log(`🎵 Phát playlist: ${newPlaylist.length} bài hát`);
  };

  const switchToLogin = () => {
    setShowLogin(true);
    setError(null);
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setError(null);
  };

  // Nếu chưa đăng nhập, hiển thị form login/register
  if (!isLoggedIn) {
    return showLogin ? (
      <Login onLogin={handleLogin} switchToRegister={switchToRegister} isLoading={isLoading} error={error} />
    ) : (
      <Register onRegister={handleRegister} switchToLogin={switchToLogin} isLoading={isLoading} error={error} />
    );
  }

  // Đã đăng nhập - hiển thị app chính
  return (
    <div className="app">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <Sidebar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Navigate to="/explore" replace />} />
        <Route path="/*" element={<MainContent currentUser={currentUser} onPlaySong={handlePlaySong} onPlayPlaylist={handlePlayPlaylist} />} />
      </Routes>
      <MusicPlayer playlist={playlist} currentUser={currentUser} initialIndex={currentSongIndex} />
    </div>
  );
}

export default App;
