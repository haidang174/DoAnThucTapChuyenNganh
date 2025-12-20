// src/components/Sidebar/sections/Explore.jsx
import { useState, useEffect } from "react";
import { getAllSongsService, getAllAlbumsService, getAllGenresService } from "../../../services/mockServices";
import { formatSongsForPlayer } from "../../../data/mockData";
import "./Explore.css";

const Explore = ({ onPlaySong, onPlayPlaylist }) => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("songs"); // songs, albums, genres

  /**
   * Load dữ liệu khi component mount
   */
  useEffect(() => {
    loadData();
  }, []);

  /**
   * Load tất cả dữ liệu từ mock services
   */
  const loadData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Gọi các services song song
      const [songsResponse, albumsResponse, genresResponse] = await Promise.all([getAllSongsService(), getAllAlbumsService(), getAllGenresService()]);

      if (songsResponse.success) {
        setSongs(songsResponse.data);
      }

      if (albumsResponse.success) {
        setAlbums(albumsResponse.data);
      }

      if (genresResponse.success) {
        setGenres(genresResponse.data);
      }

      console.log("✅ Đã load dữ liệu Explore");
    } catch (err) {
      setError(err.message);
      console.error("❌ Lỗi load dữ liệu Explore:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Format duration từ HH:MM:SS sang MM:SS
   */
  const formatDuration = duration => {
    if (!duration) return "00:00";
    const parts = duration.split(":");
    return `${parts[1]}:${parts[2]}`;
  };

  /**
   * Phát một bài hát
   */
  const handlePlaySong = (song, index) => {
    console.log("🎵 Click vào bài hát:", song.Title, "Index:", index);

    if (onPlaySong) {
      // Format sang dạng player cần
      const formattedSongs = formatSongsForPlayer(songs);
      console.log("📀 Playlist được format:", formattedSongs.length, "bài");
      onPlaySong(formattedSongs, index);
    } else {
      console.warn("⚠️ onPlaySong prop không tồn tại!");
    }
  };

  /**
   * Phát album
   */
  const handlePlayAlbum = album => {
    console.log("💿 Click vào album:", album.Name);

    if (onPlayPlaylist) {
      try {
        // Lấy danh sách bài hát trong album
        const albumSongs = album.Songs || [];
        console.log("📀 Album có:", albumSongs.length, "bài");

        const formattedSongs = formatSongsForPlayer(albumSongs);
        onPlayPlaylist(formattedSongs, 0);
      } catch (err) {
        console.error("❌ Lỗi phát album:", err);
      }
    } else {
      console.warn("⚠️ onPlayPlaylist prop không tồn tại!");
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="explore-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="explore-container">
        <div className="error-message">
          <p>❌ Lỗi: {error}</p>
          <button onClick={loadData} className="retry-button">
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="explore-container">
      {/* Tabs */}
      <div className="explore-tabs">
        <button className={`tab-button ${activeTab === "songs" ? "active" : ""}`} onClick={() => setActiveTab("songs")}>
          Bài Hát ({songs.length})
        </button>
        <button className={`tab-button ${activeTab === "albums" ? "active" : ""}`} onClick={() => setActiveTab("albums")}>
          Albums ({albums.length})
        </button>
        <button className={`tab-button ${activeTab === "genres" ? "active" : ""}`} onClick={() => setActiveTab("genres")}>
          Thể Loại ({genres.length})
        </button>
      </div>

      {/* Content */}
      <div className="explore-content">
        {/* Tab: Bài hát */}
        {activeTab === "songs" && (
          <div className="songs-grid">
            {songs.map((song, index) => (
              <div key={song.IDSong} className="song-card" onClick={() => handlePlaySong(song, index)}>
                <div className="song-cover">
                  <img src={song.Avatar} alt={song.Title} />
                  <button
                    className="play-button"
                    onClick={e => {
                      e.stopPropagation();
                      handlePlaySong(song, index);
                    }}
                  >
                    ▶
                  </button>
                </div>
                <div className="song-info">
                  <h3 className="song-title">{song.Title}</h3>
                  <p className="song-artist">{song.Artists}</p>
                  <div className="song-meta">
                    <span className="duration"> {formatDuration(song.Duration)}</span>
                  </div>
                  {song.Album && <p className="album-name">{song.Album.Name}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Albums */}
        {activeTab === "albums" && (
          <div className="albums-grid">
            {albums.map(album => (
              <div key={album.IDAlbum} className="album-card" onClick={() => handlePlayAlbum(album)}>
                <div className="album-cover">
                  <img src={album.CoverImage} alt={album.Name} />
                  <button
                    className="play-button"
                    onClick={e => {
                      e.stopPropagation();
                      handlePlayAlbum(album);
                    }}
                  >
                    ▶
                  </button>
                </div>
                <div className="album-info">
                  <h3 className="album-title">{album.Name}</h3>
                  <p className="album-artist">{album.Artist?.Name}</p>
                  <div className="album-meta">
                    <span className="year"> {album.ReleaseYear}</span>
                    <span className="song-count">🎵 {album.SongCount} bài</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Thể loại */}
        {activeTab === "genres" && (
          <div className="genres-grid">
            {genres.map(genre => (
              <div key={genre.IDGenre} className="genre-card">
                <div className="genre-icon">🎵</div>
                <h3 className="genre-name">{genre.GenreName}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
