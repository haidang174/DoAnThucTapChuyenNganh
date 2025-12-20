// hooks/explore/useLikedSongs.js
import { useState } from "react";

const useLikedSongs = () => {
  const [likedSongs, setLikedSongs] = useState(new Set());

  const toggleLike = songId => {
    setLikedSongs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(songId)) {
        newSet.delete(songId);
      } else {
        newSet.add(songId);
      }
      return newSet;
    });
  };

  const isLiked = songId => {
    return likedSongs.has(songId);
  };

  return {
    likedSongs,
    toggleLike,
    isLiked
  };
};

export default useLikedSongs;
