// src/components/Sidebar/sections/Recent.jsx
import { useState, useEffect } from "react";
import { getListenHistoryService } from "../../../services/mockServices";
import "./Recent.css";

const Recent = ({ currentUser }) => {
  const [recentSongs, setRecentSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterDays, setFilterDays] = useState("all"); // all, today, week, month

  /**
   * Load lịch sử nghe
   */
  useEffect(() => {
    if (currentUser) {
      loadRecentSongs();
    }
  }, [currentUser]);

  const loadRecentSongs = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getListenHistoryService(currentUser.id);

      if (response.success) {
        setRecentSongs(response.data);
        console.log("✅ Đã load lịch sử nghe:", response.data.length);
      }
    } catch (err) {
      setError(err.message);
      console.error("❌ Lỗi load lịch sử:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Filter songs theo thời gian
   */
  const getFilteredSongs = () => {
    const now = new Date();

    switch (filterDays) {
      case "today":
        return recentSongs.filter(song => {
          const songDate = new Date(song.ReleaseDate);
          return songDate.toDateString() === now.toDateString();
        });

      case "week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return recentSongs.filter(song => {
          const songDate = new Date(song.ReleaseDate);
          return songDate >= weekAgo;
        });

      case "month":
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        return recentSongs.filter(song => {
          const songDate = new Date(song.ReleaseDate);
          return songDate >= monthAgo;
        });

      default:
        return recentSongs;
    }
  };

  const filteredSongs = getFilteredSongs();

  /**
   * Format duration
   */
  const formatDuration = duration => {
    if (!duration) return "00:00";
    const parts = duration.split(":");
    return `${parts[1]}:${parts[2]}`;
  };

  /**
   * Format relative time
   */
  const formatRelativeTime = dateString => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Vừa xong";
    if (diffMins < 60) return `${diffMins} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    if (diffDays < 7) return `${diffDays} ngày trước`;

    return date.toLocaleDateString("vi-VN");
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="recent-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Đang tải lịch sử nghe...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="recent-container">
        <div className="error-message">
          <p>❌ Lỗi: {error}</p>
          <button onClick={loadRecentSongs} className="retry-button">
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (recentSongs.length === 0) {
    return (
      <div className="recent-container">
        <div className="empty-state">
          <div className="empty-icon">🎵</div>
          <h2>Chưa có lịch sử nghe</h2>
          <p>Bắt đầu nghe nhạc để xem lịch sử của bạn ở đây!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recent-container">
      <div className="recent-header">
        <h1>🕐 Nghe Gần Đây</h1>
        <p className="subtitle">{recentSongs.length} bài hát</p>
      </div>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button className={`filter-btn ${filterDays === "all" ? "active" : ""}`} onClick={() => setFilterDays("all")}>
          Tất cả
        </button>
        <button className={`filter-btn ${filterDays === "today" ? "active" : ""}`} onClick={() => setFilterDays("today")}>
          Hôm nay
        </button>
        <button className={`filter-btn ${filterDays === "week" ? "active" : ""}`} onClick={() => setFilterDays("week")}>
          Tuần này
        </button>
        <button className={`filter-btn ${filterDays === "month" ? "active" : ""}`} onClick={() => setFilterDays("month")}>
          Tháng này
        </button>
      </div>

      {/* Songs list */}
      {filteredSongs.length === 0 ? (
        <div className="no-results">
          <p>Không có bài hát nào trong khoảng thời gian này</p>
        </div>
      ) : (
        <div className="songs-list">
          {filteredSongs.map((song, index) => (
            <div key={`${song.IDSong}-${index}`} className="song-item">
              <div className="song-thumbnail">
                <img src={song.Avatar} alt={song.Title} />
                <button className="play-overlay">▶</button>
              </div>

              <div className="song-details">
                <h3 className="song-title">{song.Title}</h3>
                <p className="song-artist">{song.Artists}</p>
                <p className="listen-time">{formatRelativeTime(song.ReleaseDate)}</p>
              </div>

              <div className="song-duration">{formatDuration(song.Duration)}</div>

              <div className="song-actions">
                <button className="like-button" title="Thích">
                  ❤️
                </button>
                <button className="more-button" title="Thêm">
                  ⋮
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Clear history button */}
      {recentSongs.length > 0 && (
        <div className="clear-history">
          <button
            className="clear-button"
            onClick={() => {
              if (confirm("Bạn có chắc muốn xóa toàn bộ lịch sử nghe?")) {
                setRecentSongs([]);
                console.log("✅ Đã xóa lịch sử");
              }
            }}
          >
            🗑️ Xóa lịch sử
          </button>
        </div>
      )}
    </div>
  );
};

export default Recent;
