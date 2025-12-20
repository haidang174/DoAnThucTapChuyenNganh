// src/components/Sidebar/sections/Explore.jsx
import useExplore from "../../../hooks/sidebar/section/useExplore";
import "./Explore.css";

const Explore = ({ onPlaySong, onPlayPlaylist }) => {
  const { songs, albums, genres, isLoading, error, loadData, formatDuration, handlePlaySong, handlePlayAlbum, handleGenreClick } = useExplore();

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
      {/* Thể loại */}
      <section className="explore-section">
        <div className="section-header">
          <h2 className="section-title">Thể Loại</h2>
        </div>
        <div className="genres-grid">
          {genres.map(genre => (
            <div key={genre.IDGenre} className="genre-card" onClick={() => handleGenreClick(genre)}>
              <h3 className="genre-name">{genre.GenreName}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Bài hát */}
      <section className="explore-section">
        <div className="section-header">
          <h2 className="section-title">Bài Hát Nổi Bật</h2>
        </div>
        <div className="songs-grid">
          {songs.map((song, index) => (
            <div key={song.IDSong} className="song-card" onClick={() => handlePlaySong(onPlaySong, song, index)}>
              <div className="song-cover">
                <img src={song.Avatar} alt={song.Title} />
                <button
                  className="play-button"
                  onClick={e => {
                    e.stopPropagation();
                    handlePlaySong(onPlaySong, song, index);
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
                {song.Album && <p className="album-name">📀 {song.Album.Name}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Albums */}
      <section className="explore-section">
        <div className="section-header">
          <h2 className="section-title">Albums</h2>
        </div>
        <div className="albums-grid">
          {albums.map(album => (
            <div key={album.IDAlbum} className="album-card" onClick={() => handlePlayAlbum(onPlayPlaylist, album)}>
              <div className="album-cover">
                <img src={album.CoverImage} alt={album.Name} />
                <button
                  className="play-button"
                  onClick={e => {
                    e.stopPropagation();
                    handlePlayAlbum(onPlayPlaylist, album);
                  }}
                >
                  ▶
                </button>
              </div>
              <div className="album-info">
                <h3 className="album-title">{album.Name}</h3>
                <p className="album-artist">{album.Artist?.Name}</p>
                <div className="album-meta">
                  <span className="year">📅 {album.ReleaseYear}</span>
                  <span className="song-count">🎵 {album.SongCount} bài</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
