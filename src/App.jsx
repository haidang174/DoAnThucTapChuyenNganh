import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const playlist = [
    {
      title: "Không thể say",
      singer: "HIEUTHUHAI",
      src: "/assets/music/KhongTheSay-HIEUTHUHAI.mp3", // đường dẫn tới file nhạc
      img: "/assets/icon/hieuthuhai.jpg", // poster hình ảnh
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

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <MusicPlayer playlist={playlist} />
    </div>
  );
}

export default App;
