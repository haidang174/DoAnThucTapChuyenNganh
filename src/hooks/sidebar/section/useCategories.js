// src/hooks/sidebar/section/useCategories.js
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllGenresService, getSongsByGenreService } from "../../../services/mockServices";
import { formatSongsForPlayer } from "../../../data/mockData";

const useCategories = () => {
  const location = useLocation();
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadGenres();
  }, []);

  useEffect(() => {
    if (location.state?.selectedGenre) {
      const genreFromExplore = location.state.selectedGenre;
      setSelectedGenre(genreFromExplore);
      loadSongsByGenre(genreFromExplore.IDGenre);
    } else if (!selectedGenre && genres.length > 0) {
      handleGenreSelect(genres[0]);
    }
  }, [location.state, genres]);

  const loadGenres = async () => {
    try {
      setIsLoading(true);
      const response = await getAllGenresService();

      if (response.success) {
        setGenres(response.data);

        if (!selectedGenre && response.data.length > 0) {
          handleGenreSelect(response.data[0]);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadSongsByGenre = async genreId => {
    try {
      setIsLoading(true);
      const response = await getSongsByGenreService(genreId);

      if (response.success) {
        setSongs(response.data.songs);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenreSelect = async genre => {
    setSelectedGenre(genre);
    await loadSongsByGenre(genre.IDGenre);
  };

  const handlePlaySong = (onPlaySong, song, index) => {
    if (onPlaySong) {
      const formattedSongs = formatSongsForPlayer(songs);
      onPlaySong(formattedSongs, index);
    }
  };

  const formatDuration = duration => {
    if (!duration) return "00:00";
    const parts = duration.split(":");
    return `${parts[1]}:${parts[2]}`;
  };

  return {
    genres,
    selectedGenre,
    songs,
    isLoading,
    error,
    loadGenres,
    handleGenreSelect,
    handlePlaySong,
    formatDuration
  };
};

export default useCategories;
