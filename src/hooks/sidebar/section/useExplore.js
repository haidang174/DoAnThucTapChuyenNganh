// src/hooks/sidebar/section/useExplore.js
import { useState, useEffect } from "react";
import { getAllSongsService, getAllAlbumsService, getAllGenresService } from "../../../services/mockServices";
import { formatSongsForPlayer } from "../../../data/mockData";

const useExplore = () => {
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
        const formattedSongs = formatSongsForPlayer(albumSongs);
        onPlayPlaylist(formattedSongs, 0);
      } catch (err) {
        console.error(err);
      }
    }
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
    handlePlayAlbum
  };
};

export default useExplore;
