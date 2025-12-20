// src/components/Sidebar/sections/Favorite.jsx
import { useState, useEffect } from "react";
import { getFavouriteSongsService, removeFromFavouriteService } from "../../../services/mockServices";
import "./Favorite.css";

const Favorite = ({ currentUser }) => {
  const [favouriteSongs, setFavouriteSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Load danh sách yêu thích
   */
  useEffect(() => {
    if (currentUser) {
      loadFavourites();
    }
  }, [currentUser]);

  const loadFavourites = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getFavouriteSongsService(currentUser.id);

      if (response.success) {
        setFavouriteSongs(response.data);
        console.log("✅ Đã load bài hát yêu thích:", response.data.length);
      }
    } catch (err) {
      setError(err.message);
      console.error("❌ Lỗi load yêu thích:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Xóa khỏi yêu thích
   */
  const handleRemoveFavourite = async songId => {
    try {
      const response = await removeFromFavouriteService(currentUser.id, songId);

      if (response.success) {
        // Cập nhật UI
        setFavouriteSongs(prev => prev.filter(song => song.IDSong !== songId));
        console.log("✅ Đã xóa khỏi yêu thích");
      }
    } catch (err) {
      console.error("❌ Lỗi xóa yêu thích:", err);
      alert("Có lỗi xảy ra: " + err.message);
    }
  };

  /**
   * Format duration
   */
  const formatDuration = duration => {
    if (!duration) return "00:00";
    const parts = duration.split(":");
    return `${parts[1]}:${parts[2]}`;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="favorite-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Đang tải danh sách yêu thích...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="favorite-container">
        <div className="error-message">
          <p>❌ Lỗi: {error}</p>
          <button onClick={loadFavourites} className="retry-button">
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (favouriteSongs.length === 0) {
    return (
      <div className="favorite-container">
        <div className="empty-state">
          <div className="empty-icon">❤️</div>
          <h2>Chưa có bài hát yêu thích</h2>
          <p>Hãy thêm những bài hát bạn yêu thích để nghe lại sau nhé!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="favorite-container">
      <div className="favorite-header">
        <h1>❤️ Bài Hát Yêu Thích</h1>
        <p className="subtitle">{favouriteSongs.length} bài hát</p>
      </div>

      <div className="favorite-actions">
        <button className="play-all-button">▶️ Phát tất cả</button>
        <button className="shuffle-button">🔀 Phát ngẫu nhiên</button>
      </div>

      <div className="songs-list">
        {favouriteSongs.map((song, index) => (
          <div key={song.IDSong} className="song-item">
            <div className="song-number">{index + 1}</div>

            <div className="song-thumbnail">
              <img src={song.Avatar} alt={song.Title} />
              <button className="play-overlay">▶</button>
            </div>

            <div className="song-details">
              <h3 className="song-title">{song.Title}</h3>
              <p className="song-artist">{song.Artists}</p>
            </div>

            <div className="song-duration">{formatDuration(song.Duration)}</div>

            <div className="song-actions">
              <button className="remove-button" onClick={() => handleRemoveFavourite(song.IDSong)} title="Xóa khỏi yêu thích">
                💔
              </button>
              <button className="more-button" title="Thêm">
                ⋮
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
