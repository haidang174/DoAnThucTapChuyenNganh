import React, { useEffect, useState } from "react";
import useLikedSongs from "../../../hooks/sidebar/section/useLikedSongs";
import { getCategories, getFeaturedPlaylists, getTrendingSongs, getNewReleases } from "../../../services/exploreService";
import "./Explore.css";

// SVG Icons
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const MusicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const Explore = () => {
  const { toggleLike, isLiked } = useLikedSongs();
  const [categories, setCategories] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [trendingSongs, setTrendingSongs] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    // Load data từ service
    setCategories(getCategories());
    setFeaturedPlaylists(getFeaturedPlaylists());
    setTrendingSongs(getTrendingSongs());
    setNewReleases(getNewReleases());
  }, []);

  return (
    <div className="explore">
      {/* Categories */}
      {categories.length > 0 && (
        <div className="categories">
          {categories.map((cat, idx) => (
            <button key={idx} className={`category-btn ${cat.active ? "active" : ""}`}>
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Featured Playlists */}
      {featuredPlaylists.length > 0 && (
        <div className="explore-section">
          <h2 className="section-title">Playlist Nổi Bật</h2>
          <div className="playlists-grid">
            {featuredPlaylists.map(playlist => (
              <div key={playlist.id} className="playlist-card">
                <div className="playlist-image-wrapper">
                  <img src={playlist.image} alt={playlist.title} className="playlist-image" />
                  <button className="play-btn">
                    <PlayIcon />
                  </button>
                </div>
                <h3 className="playlist-title">{playlist.title}</h3>
                <p className="playlist-description">{playlist.description}</p>
                <p className="playlist-songs">{playlist.songs} bài hát</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trending Songs */}
      {trendingSongs.length > 0 && (
        <div className="explore-section">
          <div className="section-header">
            <TrendingUpIcon />
            <h2 className="section-title">Bài Hát Thịnh Hành</h2>
          </div>
          <div className="trending-container">
            {trendingSongs.map((song, idx) => (
              <div key={song.id} className="song-item">
                <span className="song-number">{idx + 1}</span>
                <div className="song-info">
                  <div className="song-title">{song.title}</div>
                  <div className="song-artist">{song.artist}</div>
                </div>
                <div className="song-album">{song.album}</div>
                <div className="song-duration">
                  <ClockIcon />
                  {song.duration}
                </div>
                <div className="song-plays">{song.plays} lượt nghe</div>
                <button className="like-btn" onClick={() => toggleLike(song.id)}>
                  <HeartIcon filled={isLiked(song.id)} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* New Releases */}
      {newReleases.length > 0 && (
        <div className="explore-section">
          <div className="section-header">
            <MusicIcon />
            <h2 className="section-title">Phát Hành Mới</h2>
          </div>
          <div className="releases-scroll">
            {newReleases.map(release => (
              <div key={release.id} className="release-card">
                <img src={release.image} alt={release.title} className="release-image" />
                <h3 className="release-title">{release.title}</h3>
                <p className="release-artist">{release.artist}</p>
                <p className="release-date">{release.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
