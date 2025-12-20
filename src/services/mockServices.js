// src/services/mockServices.js

import {
  mockSongs,
  mockAlbums,
  mockArtists,
  mockGenres,
  mockPlaylists,
  mockUsers,
  mockFavouriteLists,
  mockListenHistory,
  mockPlaylistSongs,
  mockGenreSongs,
  getArtistNamesBySongId,
  getGenresBySongId,
  getAlbumBySongId,
  getSongsByPlaylistId,
  getPlaylistsByUserId,
  getFavouriteSongsByUserId,
  getRecentSongsByUserId,
  getSongsByAlbumId,
  getAlbumsByArtistId,
  formatSongForPlayer,
  formatSongsForPlayer
} from "../data/mockData";

// ============================================
// CONFIGURATION
// ============================================
const API_DELAY = 500; // ms - giả lập độ trễ mạng
const ENABLE_RANDOM_ERRORS = false; // Bật/tắt lỗi ngẫu nhiên để test
const ERROR_RATE = 0.1; // 10% tỷ lệ lỗi nếu bật

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Giả lập delay API call
 */
const delay = (ms = API_DELAY) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Giả lập random error để test error handling
 */
const shouldThrowError = () => {
  return ENABLE_RANDOM_ERRORS && Math.random() < ERROR_RATE;
};

/**
 * Wrapper cho tất cả API calls
 */
const mockApiCall = async fn => {
  await delay();

  if (shouldThrowError()) {
    throw new Error("Network error - Simulated for testing");
  }

  return fn();
};

// ============================================
// AUTHENTICATION SERVICES
// ============================================

/**
 * Mock Login
 */
export const loginService = async (username, password) => {
  return mockApiCall(() => {
    // Trong thực tế sẽ gọi API: POST /api/auth/login
    const user = mockUsers.find(u => u.Name === username && u.Password === password);

    if (!user) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng");
    }

    // Giả lập JWT token
    const token = `mock_token_${user.IDUser}_${Date.now()}`;

    return {
      success: true,
      data: {
        user: {
          id: user.IDUser,
          name: user.Name,
          email: user.Email,
          accountType: user.AccountType
        },
        token
      }
    };
  });
};

/**
 * Mock Register
 */
export const registerService = async userData => {
  return mockApiCall(() => {
    // Trong thực tế sẽ gọi API: POST /api/auth/register
    const { username, email, password } = userData;

    // Check email đã tồn tại
    const existingUser = mockUsers.find(u => u.Email === email);
    if (existingUser) {
      throw new Error("Email đã được sử dụng");
    }

    const newUser = {
      IDUser: mockUsers.length + 1,
      Name: username,
      Email: email,
      Password: password,
      AccountType: "Standard"
    };

    // Giả lập JWT token
    const token = `mock_token_${newUser.IDUser}_${Date.now()}`;

    return {
      success: true,
      data: {
        user: {
          id: newUser.IDUser,
          name: newUser.Name,
          email: newUser.Email,
          accountType: newUser.AccountType
        },
        token
      }
    };
  });
};

/**
 * Mock Logout
 */
export const logoutService = async () => {
  return mockApiCall(() => {
    // Trong thực tế sẽ gọi API: POST /api/auth/logout
    return {
      success: true,
      message: "Đăng xuất thành công"
    };
  });
};

// ============================================
// SONG SERVICES
// ============================================

/**
 * Lấy tất cả bài hát
 */
export const getAllSongsService = async () => {
  return mockApiCall(() => {
    const songsWithDetails = mockSongs.map(song => ({
      ...song,
      Artists: getArtistNamesBySongId(song.IDSong),
      Genres: getGenresBySongId(song.IDSong),
      Album: getAlbumBySongId(song.IDSong)
    }));

    return {
      success: true,
      data: songsWithDetails
    };
  });
};

/**
 * Lấy bài hát theo ID
 */
export const getSongByIdService = async songId => {
  return mockApiCall(() => {
    const song = mockSongs.find(s => s.IDSong === songId);

    if (!song) {
      throw new Error("Không tìm thấy bài hát");
    }

    return {
      success: true,
      data: {
        ...song,
        Artists: getArtistNamesBySongId(song.IDSong),
        Genres: getGenresBySongId(song.IDSong),
        Album: getAlbumBySongId(song.IDSong)
      }
    };
  });
};

/**
 * Tìm kiếm bài hát
 */
export const searchSongsService = async keyword => {
  return mockApiCall(() => {
    const lowerKeyword = keyword.toLowerCase();

    const results = mockSongs.filter(song => {
      const titleMatch = song.Title.toLowerCase().includes(lowerKeyword);
      const artistMatch = getArtistNamesBySongId(song.IDSong).toLowerCase().includes(lowerKeyword);

      return titleMatch || artistMatch;
    });

    return {
      success: true,
      data: results.map(song => ({
        ...song,
        Artists: getArtistNamesBySongId(song.IDSong)
      }))
    };
  });
};

/**
 * Tăng view count
 */
export const incrementViewService = async songId => {
  return mockApiCall(() => {
    const song = mockSongs.find(s => s.IDSong === songId);

    if (!song) {
      throw new Error("Không tìm thấy bài hát");
    }

    // Trong thực tế sẽ cập nhật database
    song.Views += 1;

    return {
      success: true,
      data: { views: song.Views }
    };
  });
};

// ============================================
// ALBUM SERVICES
// ============================================

/**
 * Lấy tất cả albums
 */
export const getAllAlbumsService = async () => {
  return mockApiCall(() => {
    const albumsWithDetails = mockAlbums.map(album => {
      const artist = mockArtists.find(a => a.IDArtist === album.IDArtist);
      const songs = getSongsByAlbumId(album.IDAlbum);

      return {
        ...album,
        Artist: artist,
        SongCount: songs.length,
        Songs: songs
      };
    });

    return {
      success: true,
      data: albumsWithDetails
    };
  });
};

/**
 * Lấy album theo ID
 */
export const getAlbumByIdService = async albumId => {
  return mockApiCall(() => {
    const album = mockAlbums.find(a => a.IDAlbum === albumId);

    if (!album) {
      throw new Error("Không tìm thấy album");
    }

    const artist = mockArtists.find(a => a.IDArtist === album.IDArtist);
    const songs = getSongsByAlbumId(album.IDAlbum);

    return {
      success: true,
      data: {
        ...album,
        Artist: artist,
        Songs: songs.map(song => ({
          ...song,
          Artists: getArtistNamesBySongId(song.IDSong)
        }))
      }
    };
  });
};

// ============================================
// ARTIST SERVICES
// ============================================

/**
 * Lấy tất cả nghệ sĩ
 */
export const getAllArtistsService = async () => {
  return mockApiCall(() => {
    return {
      success: true,
      data: mockArtists
    };
  });
};

/**
 * Lấy nghệ sĩ theo ID
 */
export const getArtistByIdService = async artistId => {
  return mockApiCall(() => {
    const artist = mockArtists.find(a => a.IDArtist === artistId);

    if (!artist) {
      throw new Error("Không tìm thấy nghệ sĩ");
    }

    const albums = getAlbumsByArtistId(artistId);

    return {
      success: true,
      data: {
        ...artist,
        Albums: albums
      }
    };
  });
};

// ============================================
// GENRE SERVICES
// ============================================

/**
 * Lấy tất cả thể loại
 */
export const getAllGenresService = async () => {
  return mockApiCall(() => {
    return {
      success: true,
      data: mockGenres
    };
  });
};

/**
 * Lấy bài hát theo thể loại
 */
export const getSongsByGenreService = async genreId => {
  return mockApiCall(() => {
    const genre = mockGenres.find(g => g.IDGenre === genreId);

    if (!genre) {
      throw new Error("Không tìm thấy thể loại");
    }

    const genreSongs = mockGenreSongs.filter(gs => gs.IDGenre === genreId);
    const songs = genreSongs.map(gs => mockSongs.find(s => s.IDSong === gs.IDSong)).filter(Boolean);

    return {
      success: true,
      data: {
        genre,
        songs: songs.map(song => ({
          ...song,
          Artists: getArtistNamesBySongId(song.IDSong)
        }))
      }
    };
  });
};

// ============================================
// PLAYLIST SERVICES
// ============================================

/**
 * Lấy playlists của user
 */
export const getUserPlaylistsService = async userId => {
  return mockApiCall(() => {
    const playlists = getPlaylistsByUserId(userId);

    const playlistsWithDetails = playlists.map(playlist => {
      const songs = getSongsByPlaylistId(playlist.IDPlaylist);

      return {
        ...playlist,
        SongCount: songs.length,
        Songs: songs
      };
    });

    return {
      success: true,
      data: playlistsWithDetails
    };
  });
};

/**
 * Lấy playlist theo ID
 */
export const getPlaylistByIdService = async playlistId => {
  return mockApiCall(() => {
    const playlist = mockPlaylists.find(p => p.IDPlaylist === playlistId);

    if (!playlist) {
      throw new Error("Không tìm thấy playlist");
    }

    const songs = getSongsByPlaylistId(playlistId);

    return {
      success: true,
      data: {
        ...playlist,
        Songs: songs.map(song => ({
          ...song,
          Artists: getArtistNamesBySongId(song.IDSong)
        }))
      }
    };
  });
};

/**
 * Tạo playlist mới
 */
export const createPlaylistService = async (userId, playlistData) => {
  return mockApiCall(() => {
    const newPlaylist = {
      IDPlaylist: mockPlaylists.length + 1,
      Name: playlistData.name,
      Description: playlistData.description || "",
      IDUser: userId,
      CoverImage: playlistData.coverImage || "/assets/playlists/default.jpg",
      CreatedDate: new Date().toISOString()
    };

    return {
      success: true,
      data: newPlaylist
    };
  });
};

/**
 * Thêm bài hát vào playlist
 */
export const addSongToPlaylistService = async (playlistId, songId) => {
  return mockApiCall(() => {
    // Check playlist exists
    const playlist = mockPlaylists.find(p => p.IDPlaylist === playlistId);
    if (!playlist) {
      throw new Error("Không tìm thấy playlist");
    }

    // Check song exists
    const song = mockSongs.find(s => s.IDSong === songId);
    if (!song) {
      throw new Error("Không tìm thấy bài hát");
    }

    // Check if already exists
    const exists = mockPlaylistSongs.find(ps => ps.IDPlaylist === playlistId && ps.IDSong === songId);

    if (exists) {
      throw new Error("Bài hát đã có trong playlist");
    }

    return {
      success: true,
      message: "Đã thêm bài hát vào playlist"
    };
  });
};

/**
 * Xóa bài hát khỏi playlist
 */
export const removeSongFromPlaylistService = async (playlistId, songId) => {
  return mockApiCall(() => {
    return {
      success: true,
      message: "Đã xóa bài hát khỏi playlist"
    };
  });
};

// ============================================
// FAVOURITE SERVICES
// ============================================

/**
 * Lấy danh sách yêu thích
 */
export const getFavouriteSongsService = async userId => {
  return mockApiCall(() => {
    const favouriteSongs = getFavouriteSongsByUserId(userId);

    return {
      success: true,
      data: favouriteSongs.map(song => ({
        ...song,
        Artists: getArtistNamesBySongId(song.IDSong)
      }))
    };
  });
};

/**
 * Thêm vào yêu thích
 */
export const addToFavouriteService = async (userId, songId) => {
  return mockApiCall(() => {
    // Check if already exists
    const exists = mockFavouriteLists.find(f => f.IDUser === userId && f.IDSong === songId);

    if (exists) {
      throw new Error("Bài hát đã có trong danh sách yêu thích");
    }

    return {
      success: true,
      message: "Đã thêm vào yêu thích"
    };
  });
};

/**
 * Xóa khỏi yêu thích
 */
export const removeFromFavouriteService = async (userId, songId) => {
  return mockApiCall(() => {
    return {
      success: true,
      message: "Đã xóa khỏi yêu thích"
    };
  });
};

/**
 * Check bài hát có trong yêu thích không
 */
export const checkIsFavouriteService = async (userId, songId) => {
  return mockApiCall(() => {
    const exists = mockFavouriteLists.find(f => f.IDUser === userId && f.IDSong === songId);

    return {
      success: true,
      data: { isFavourite: !!exists }
    };
  });
};

// ============================================
// HISTORY SERVICES
// ============================================

/**
 * Lấy lịch sử nghe
 */
export const getListenHistoryService = async userId => {
  return mockApiCall(() => {
    const history = getRecentSongsByUserId(userId);

    return {
      success: true,
      data: history.map(song => ({
        ...song,
        Artists: getArtistNamesBySongId(song.IDSong)
      }))
    };
  });
};

/**
 * Thêm vào lịch sử nghe
 */
export const addToHistoryService = async (userId, songId) => {
  return mockApiCall(() => {
    return {
      success: true,
      message: "Đã thêm vào lịch sử"
    };
  });
};

// ============================================
// RANKING SERVICES
// ============================================

/**
 * Lấy BXH theo views
 */
export const getRankingByViewsService = async (limit = 50) => {
  return mockApiCall(() => {
    const sortedSongs = [...mockSongs].sort((a, b) => b.Views - a.Views).slice(0, limit);

    return {
      success: true,
      data: sortedSongs.map((song, index) => ({
        rank: index + 1,
        ...song,
        Artists: getArtistNamesBySongId(song.IDSong)
      }))
    };
  });
};

/**
 * Lấy BXH mới nhất
 */
export const getRankingByNewestService = async (limit = 50) => {
  return mockApiCall(() => {
    const sortedSongs = [...mockSongs].sort((a, b) => new Date(b.ReleaseDate) - new Date(a.ReleaseDate)).slice(0, limit);

    return {
      success: true,
      data: sortedSongs.map((song, index) => ({
        rank: index + 1,
        ...song,
        Artists: getArtistNamesBySongId(song.IDSong)
      }))
    };
  });
};

// ============================================
// EXPORT ALL SERVICES
// ============================================
export default {
  // Auth
  loginService,
  registerService,
  logoutService,

  // Songs
  getAllSongsService,
  getSongByIdService,
  searchSongsService,
  incrementViewService,

  // Albums
  getAllAlbumsService,
  getAlbumByIdService,

  // Artists
  getAllArtistsService,
  getArtistByIdService,

  // Genres
  getAllGenresService,
  getSongsByGenreService,

  // Playlists
  getUserPlaylistsService,
  getPlaylistByIdService,
  createPlaylistService,
  addSongToPlaylistService,
  removeSongFromPlaylistService,

  // Favourites
  getFavouriteSongsService,
  addToFavouriteService,
  removeFromFavouriteService,
  checkIsFavouriteService,

  // History
  getListenHistoryService,
  addToHistoryService,

  // Ranking
  getRankingByViewsService,
  getRankingByNewestService
};
