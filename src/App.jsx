import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const playlist = [
    {
      title: "Không thể say",
      singer: "HIEUTHUHAI",
      src: "/assets/music/KhongTheSay-HIEUTHUHAI.mp3",
      img: "/assets/icon/hieuthuhai.jpg",
      lyrics: "Lyrics của Song 1..."
    },
    {
      title: "Buồn Hay Vui",
      singer: "Singer 2",
      src: "/assets/music/Buồn Hay Vui.mp3",
      img: "/assets/icon/pulse.png",
      lyrics: "Lyrics của Song 2..."
    },
    {
      title: "KHI CƠN MƯA DẦN PHAI",
      singer: "Singer 3",
      src: "/assets/music/KHI CƠN MƯA DẦN PHAI - Tez ft Myra Trần.mp3",
      img: "/assets/icon/pulse.png",
      lyrics: "Lyrics của Song 3..."
    }
  ];

  const handleLogin = ({ username, password }) => {
    // Xử lý logic đăng nhập API nếu muốn
    console.log("Đăng nhập:", username, password);
    setIsLoggedIn(true);
  };

  const handleRegister = ({ username, email, password, birthDate }) => {
    // Xử lý logic đăng ký API nếu muốn
    console.log("Đăng ký:", username, email, password, birthDate);
    setIsLoggedIn(true);
  };

  const switchToLogin = () => setShowLogin(true);
  const switchToRegister = () => setShowLogin(false);

  if (!isLoggedIn) {
    return showLogin ? <Login onLogin={handleLogin} switchToRegister={switchToRegister} /> : <Register onRegister={handleRegister} switchToLogin={switchToLogin} />;
  }

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <MusicPlayer playlist={playlist} />
    </div>
  );
}

export default App;
