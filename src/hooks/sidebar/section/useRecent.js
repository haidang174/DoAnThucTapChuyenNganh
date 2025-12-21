import { useState, useEffect } from "react";
import { getListenHistoryService } from "../../../services/mockServices";
import { formatSongsForPlayer } from "../../../data/mockData";

const useRecent = currentUser => {
  const [recentSongs, setRecentSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      loadRecentSongs();
    } else {
      setIsLoading(false);
    }
  }, [currentUser]);

  /**
   * Load danh sách bài hát đã nghe gần đây
   */
  const loadRecentSongs = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await getListenHistoryService(currentUser.id);

      if (response.success) {
        // Lấy tối đa 20 bài hát gần nhất
        const songs = response.data.slice(0, 20);
        setRecentSongs(songs);
      }
    } catch (err) {
      setError(err.message);
      console.error("Lỗi load lịch sử nghe:", err);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Xử lý khi click vào bài hát
   * @param {Function} onPlaySong - Callback từ parent component
   * @param {Object} song - Bài hát được chọn
   * @param {Number} index - Index của bài hát trong danh sách
   */
  const handlePlaySong = (onPlaySong, song, index) => {
    if (onPlaySong) {
      // Format toàn bộ danh sách recent songs thành playlist
      const formattedPlaylist = formatSongsForPlayer(recentSongs);

      // Gọi callback với playlist và index
      onPlaySong(formattedPlaylist, index);

      console.log(`🎵 Phát từ Recent: ${song.Title} (${index + 1}/${recentSongs.length})`);
    }
  };

  /**
   * Format duration từ "HH:MM:SS" sang "MM:SS"
   */
  const formatDuration = duration => {
    if (!duration) return "00:00";
    const parts = duration.split(":");
    if (parts.length === 3) {
      return `${parts[1]}:${parts[2]}`;
    }
    return duration;
  };

  return {
    recentSongs,
    isLoading,
    error,
    loadRecentSongs,
    handlePlaySong,
    formatDuration
  };
};

export default useRecent;
