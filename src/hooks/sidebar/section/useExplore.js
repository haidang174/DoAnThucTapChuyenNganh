// src/hooks/sidebar/section/useExplore.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSongsService, getAllAlbumsService, getAllGenresService } from "../../../services/mockServices";
import { formatSongsForPlayer } from "../../../data/mockData";

const useExplore = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      setError(null);

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
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDuration = duration => {
    if (!duration) return "00:00";
    const parts = duration.split(":");
    return `${parts[1]}:${parts[2]}`;
  };

  const handlePlaySong = (onPlaySong, song, index) => {
    if (onPlaySong) {
      const formattedSongs = formatSongsForPlayer(songs);
      onPlaySong(formattedSongs, index);
    }
  };

  const handlePlayAlbum = (onPlayPlaylist, album) => {
    if (onPlayPlaylist) {
      try {
        const albumSongs = album.Songs || [];

        if (albumSongs.length === 0) {
          return;
        }

        const formattedSongs = formatSongsForPlayer(albumSongs);
        const validSongs = formattedSongs.filter(song => song !== null);

        if (validSongs.length === 0) {
          return;
        }

        onPlayPlaylist(validSongs, 0);
      } catch (err) {
        console.error("Lỗi phát album:", err);
      }
    }
  };

  const handleGenreClick = genre => {
    navigate("/category", { state: { selectedGenre: genre } });
  };

  return {
    songs,
    albums,
    genres,
    isLoading,
    error,
    loadData,
    formatDuration,
    handlePlaySong,
    handlePlayAlbum,
    handleGenreClick
  };
};

export default useExplore;
