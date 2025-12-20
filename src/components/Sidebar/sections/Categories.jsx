// src/components/Sidebar/sections/Categories.jsx
import useCategories from "../../../hooks/sidebar/section/useCategories";
import "./Categories.css";

const Categories = ({ onPlaySong }) => {
  const { genres, selectedGenre, songs, isLoading, error, loadGenres, handleGenreSelect, handlePlaySong: playSong, formatDuration } = useCategories();

  if (isLoading && genres.length === 0) {
    return (
      <div className="categories-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="categories-container">
        <div className="error-message">
          <p>❌ Lỗi: {error}</p>
          <button onClick={loadGenres} className="retry-button">
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="categories-container">
      {/* Genres List */}
      <div className="genres-list">
        {genres.map(genre => (
          <button key={genre.IDGenre} className={`genre-chip ${selectedGenre?.IDGenre === genre.IDGenre ? "active" : ""}`} onClick={() => handleGenreSelect(genre)}>
            {genre.GenreName}
          </button>
        ))}
      </div>

      {/* Selected Genre Content */}
      {selectedGenre && (
        <div className="genre-content">
          <div className="genre-info">
            <div>
              <h2 className="genre-title">{selectedGenre.GenreName}</h2>
            </div>
          </div>

          {/* Songs Grid */}
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Đang tải bài hát...</p>
            </div>
          ) : songs.length === 0 ? (
            <div className="empty-state">
              <p>Không có bài hát nào trong thể loại này</p>
            </div>
          ) : (
            <div className="songs-grid">
              {songs.map((song, index) => (
                <div key={song.IDSong} className="song-card" onClick={() => playSong(onPlaySong, song, index)}>
                  <div className="song-cover">
                    <img src={song.Avatar} alt={song.Title} />
                    <button
                      className="play-button"
                      onClick={e => {
                        e.stopPropagation();
                        playSong(onPlaySong, song, index);
                      }}
                    >
                      ▶
                    </button>
                  </div>
                  <div className="song-info">
                    <h3 className="song-title">{song.Title}</h3>
                    <p className="song-artist">{song.Artists}</p>
                    <div className="song-meta">
                      <span className="duration">⏱️ {formatDuration(song.Duration)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
