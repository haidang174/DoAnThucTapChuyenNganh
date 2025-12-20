// src/data/mockData.js

// ============================================
// ARTISTS - Nghệ sĩ
// ============================================
export const mockArtists = [
  {
    IDArtist: 1,
    Name: "HIEUTHUHAI",
    Information: "Rapper, producer người Việt Nam, nổi tiếng với phong cách rap đa dạng và sáng tạo."
  },
  {
    IDArtist: 2,
    Name: "Sơn Tùng M-TP",
    Information: "Ca sĩ, nhạc sĩ, rapper hàng đầu Việt Nam với nhiều hit triệu view."
  },
  {
    IDArtist: 3,
    Name: "Hoàng Thùy Linh",
    Information: "Ca sĩ nữ đa tài, nổi bật với các sản phẩm âm nhạc chất lượng cao."
  },
  {
    IDArtist: 4,
    Name: "Đen Vâu",
    Information: "Rapper với phong cách nhẹ nhàng, gần gũi và lời rap chạm đến trái tim người nghe."
  },
  {
    IDArtist: 5,
    Name: "Myra Trần",
    Information: "Nữ ca sĩ trẻ với giọng hát ngọt ngào, đầy cảm xúc."
  },
  {
    IDArtist: 6,
    Name: "Tez",
    Information: "Producer, ca sĩ tài năng với nhiều sản phẩm chất lượng."
  },
  {
    IDArtist: 7,
    Name: "Hòa Minzy",
    Information: "Ca sĩ với giọng hát nội lực, đa dạng thể loại âm nhạc."
  },
  {
    IDArtist: 8,
    Name: "AMEE",
    Information: "Nữ ca sĩ GenZ với âm nhạc trẻ trung, năng động."
  }
];

// ============================================
// ALBUMS - Album
// ============================================
export const mockAlbums = [
  {
    IDAlbum: 1,
    Name: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
    ReleaseYear: 2023,
    IDArtist: 1,
    CoverImage: "/assets/albums/hieuthuhai-album.jpg"
  },
  {
    IDAlbum: 2,
    Name: "m-tp M-TP",
    ReleaseYear: 2022,
    IDArtist: 2,
    CoverImage: "/assets/albums/sontung-album.jpg"
  },
  {
    IDAlbum: 3,
    Name: "Hoàng",
    ReleaseYear: 2021,
    IDArtist: 3,
    CoverImage: "/assets/albums/hoangthuylinh-album.jpg"
  },
  {
    IDAlbum: 4,
    Name: "Mơ Về Ngày Trở Về",
    ReleaseYear: 2023,
    IDArtist: 4,
    CoverImage: "/assets/albums/denvau-album.jpg"
  }
];

// ============================================
// GENRES - Thể loại
// ============================================
export const mockGenres = [
  { IDGenre: 1, GenreName: "Rap/Hip-hop" },
  { IDGenre: 2, GenreName: "Pop" },
  { IDGenre: 3, GenreName: "Ballad" },
  { IDGenre: 4, GenreName: "R&B" },
  { IDGenre: 5, GenreName: "EDM" },
  { IDGenre: 6, GenreName: "Rock" },
  { IDGenre: 7, GenreName: "Indie" },
  { IDGenre: 8, GenreName: "Acoustic" }
];

// ============================================
// SONGS - Bài hát
// ============================================
export const mockSongs = [
  {
    IDSong: 1,
    Title: "Không Thể Say",
    Duration: "00:03:45",
    ReleaseDate: "2023-06-15",
    Views: 15000000,
    Avatar: "/assets/icon/hieuthuhai.jpg",
    Path: "/assets/music/KhongTheSay-HIEUTHUHAI.mp3",
    Lyrics: `[Verse 1]
Anh biết em say, say trong vòng tay ai đó
Nhưng anh không thể say, say để quên đi em được
Đêm nay anh lại thức, nhìn trăng sao cũng nhớ
Về em và những ngày đầu, ta yêu nhau chân thành

[Chorus]
Không thể say, không thể nào quên được em
Dù cho em đã xa rồi, trái tim vẫn còn đau
Không thể say, dù say bao nhiêu cũng không thể
Xóa đi khoảng trống mà em để lại trong anh`,
    IDAlbum: 1
  },
  {
    IDSong: 2,
    Title: "Buồn Hay Vui",
    Duration: "00:04:20",
    ReleaseDate: "2023-03-20",
    Views: 8500000,
    Avatar: "/assets/icon/pulse.png",
    Path: "/assets/music/Buồn Hay Vui.mp3",
    Lyrics: `[Verse 1]
Buồn hay vui đều là cảm xúc của riêng mình
Đời không như là mơ, phải chấp nhận và bước tiếp
Có những lúc mệt mỏi, cũng có lúc hạnh phúc
Chỉ cần ta biết sống, tận hưởng từng khoảnh khắc

[Chorus]
Buồn hay vui, đều là một phần cuộc đời
Chấp nhận và yêu thương chính bản thân mình
Buồn hay vui, ngày mai rồi cũng sẽ qua
Cứ mỉm cười, sống hết mình với hiện tại`,
    IDAlbum: null
  },
  {
    IDSong: 3,
    Title: "Khi Cơn Mưa Dần Phai",
    Duration: "00:04:15",
    ReleaseDate: "2023-08-10",
    Views: 12000000,
    Avatar: "/assets/icon/pulse.png",
    Path: "/assets/music/KHI CƠN MƯA DẦN PHAI - Tez ft Myra Trần.mp3",
    Lyrics: `[Verse 1 - Tez]
Khi cơn mưa dần phai, anh vẫn đứng đây
Chờ em돌아 돌아, dù biết rằng không thể
Từng giọt mưa rơi xuống, như nước mắt anh tuôn
Ký ức về em, mãi không thể nào quên

[Verse 2 - Myra Trần]
Khi cơn mưa dần phai, em cũng muốn quay về
Nhưng giữa chúng ta, đã có quá nhiều đổ vỡ
Tình yêu ngày nào, giờ chỉ còn là kỷ niệm
Hãy để em đi, để cả hai tự do

[Chorus]
Khi cơn mưa dần phai, ta sẽ tìm lại chính mình
Dù con tim còn đau, nhưng sẽ học cách buông
Khi cơn mưa dần phai, hy vọng sẽ lại về
Một ngày nào đó, ta sẽ mỉm cười với quá khứ`,
    IDAlbum: null
  },
  {
    IDSong: 4,
    Title: "Lạc Trôi",
    Duration: "00:04:45",
    ReleaseDate: "2017-01-01",
    Views: 250000000,
    Avatar: "/assets/songs/lac-troi.jpg",
    Path: "/assets/music/lac-troi.mp3",
    Lyrics: `[Verse 1]
Một ngày khi ta già cả
Và những ký ức dần nhòa
Anh sẽ còn nhớ gì về em
Về những ngày đầu ta yêu...`,
    IDAlbum: 2
  },
  {
    IDSong: 5,
    Title: "See Tình",
    Duration: "00:03:50",
    ReleaseDate: "2019-07-01",
    Views: 180000000,
    Avatar: "/assets/songs/see-tinh.jpg",
    Path: "/assets/music/see-tinh.mp3",
    Lyrics: `[Verse 1]
Vì yêu em quá nhiều nên anh chẳng dám nói ra
Sợ rằng một ngày nào đó em sẽ xa anh...`,
    IDAlbum: 3
  },
  {
    IDSong: 6,
    Title: "Anh Đã Quen Với Cô Đơn",
    Duration: "00:04:05",
    ReleaseDate: "2021-11-20",
    Views: 95000000,
    Avatar: "/assets/songs/anh-da-quen.jpg",
    Path: "/assets/music/anh-da-quen.mp3",
    Lyrics: `[Verse 1]
Anh đã quen với cô đơn rồi em ơi
Từ ngày em ra đi, anh sống lạc loài...`,
    IDAlbum: 2
  },
  {
    IDSong: 7,
    Title: "Bài Này Chill Phết",
    Duration: "00:03:30",
    ReleaseDate: "2020-12-12",
    Views: 120000000,
    Avatar: "/assets/songs/bai-nay-chill.jpg",
    Path: "/assets/music/bai-nay-chill.mp3",
    Lyrics: `[Verse 1]
Bài này chill phết, mời bạn nghe thử xem
Không có gì to tát, chỉ là chút tâm tình...`,
    IDAlbum: 4
  },
  {
    IDSong: 8,
    Title: "Anh Tự Do Nhưng Cô Đơn",
    Duration: "00:04:25",
    ReleaseDate: "2022-05-15",
    Views: 78000000,
    Avatar: "/assets/songs/anh-tu-do.jpg",
    Path: "/assets/music/anh-tu-do.mp3",
    Lyrics: `[Verse 1]
Anh tự do nhưng anh cô đơn
Không còn ai bên đời anh nữa rồi...`,
    IDAlbum: 4
  }
];

// ============================================
// ARTIST-SONG RELATIONSHIP - Quan hệ nghệ sĩ-bài hát
// ============================================
export const mockArtistSongs = [
  { IDArtistSong: 1, Role: "Main Artist", IDArtist: 1, IDSong: 1 },
  { IDArtistSong: 2, Role: "Main Artist", IDArtist: 2, IDSong: 4 },
  { IDArtistSong: 3, Role: "Main Artist", IDArtist: 3, IDSong: 5 },
  { IDArtistSong: 4, Role: "Main Artist", IDArtist: 2, IDSong: 6 },
  { IDArtistSong: 5, Role: "Main Artist", IDArtist: 4, IDSong: 7 },
  { IDArtistSong: 6, Role: "Main Artist", IDArtist: 4, IDSong: 8 },
  { IDArtistSong: 7, Role: "Main Artist", IDArtist: 6, IDSong: 3 },
  { IDArtistSong: 8, Role: "Featured", IDArtist: 5, IDSong: 3 }
];

// ============================================
// GENRE-SONG RELATIONSHIP - Quan hệ thể loại-bài hát
// ============================================
export const mockGenreSongs = [
  { IDGenreSong: 1, IDGenre: 1, IDSong: 1 }, // Không Thể Say - Rap
  { IDGenreSong: 2, IDGenre: 4, IDSong: 1 }, // Không Thể Say - R&B
  { IDGenreSong: 3, IDGenre: 2, IDSong: 2 }, // Buồn Hay Vui - Pop
  { IDGenreSong: 4, IDGenre: 3, IDSong: 3 }, // Khi Cơn Mưa - Ballad
  { IDGenreSong: 5, IDGenre: 2, IDSong: 4 }, // Lạc Trôi - Pop
  { IDGenreSong: 6, IDGenre: 5, IDSong: 4 }, // Lạc Trôi - EDM
  { IDGenreSong: 7, IDGenre: 2, IDSong: 5 }, // See Tình - Pop
  { IDGenreSong: 8, IDGenre: 3, IDSong: 6 }, // Anh Đã Quen - Ballad
  { IDGenreSong: 9, IDGenre: 1, IDSong: 7 }, // Bài Này Chill - Rap
  { IDGenreSong: 10, IDGenre: 7, IDSong: 7 }, // Bài Này Chill - Indie
  { IDGenreSong: 11, IDGenre: 1, IDSong: 8 }, // Anh Tự Do - Rap
  { IDGenreSong: 12, IDGenre: 3, IDSong: 8 } // Anh Tự Do - Ballad
];

// ============================================
// USERS - Người dùng
// ============================================
export const mockUsers = [
  {
    IDUser: 1,
    Name: "Demo User",
    Password: "demo123",
    Email: "demo@music.com",
    AccountType: "Premium"
  },
  {
    IDUser: 2,
    Name: "John Doe",
    Password: "john123",
    Email: "john@example.com",
    AccountType: "Standard"
  }
];

// ============================================
// PLAYLISTS - Danh sách phát
// ============================================
export const mockPlaylists = [
  {
    IDPlaylist: 1,
    Name: "Những Bài Hát Yêu Thích",
    IDUser: 1,
    Description: "Tuyển tập những bài hát hay nhất của tôi",
    CoverImage: "/assets/playlists/favorite.jpg",
    CreatedDate: "2023-01-15"
  },
  {
    IDPlaylist: 2,
    Name: "Chill Cuối Tuần",
    IDUser: 1,
    Description: "Nhạc thư giãn cho cuối tuần",
    CoverImage: "/assets/playlists/chill.jpg",
    CreatedDate: "2023-03-20"
  },
  {
    IDPlaylist: 3,
    Name: "Workout Motivation",
    IDUser: 1,
    Description: "Nhạc sôi động cho luyện tập",
    CoverImage: "/assets/playlists/workout.jpg",
    CreatedDate: "2023-05-10"
  }
];

// ============================================
// PLAYLIST-SONG RELATIONSHIP - Quan hệ playlist-bài hát
// ============================================
export const mockPlaylistSongs = [
  { IDPlaylistSong: 1, IDSong: 1, IDPlaylist: 1 },
  { IDPlaylistSong: 2, IDSong: 3, IDPlaylist: 1 },
  { IDPlaylistSong: 3, IDSong: 4, IDPlaylist: 1 },
  { IDPlaylistSong: 4, IDSong: 5, IDPlaylist: 1 },
  { IDPlaylistSong: 5, IDSong: 7, IDPlaylist: 2 },
  { IDPlaylistSong: 6, IDSong: 8, IDPlaylist: 2 },
  { IDPlaylistSong: 7, IDSong: 3, IDPlaylist: 2 },
  { IDPlaylistSong: 8, IDSong: 1, IDPlaylist: 3 },
  { IDPlaylistSong: 9, IDSong: 4, IDPlaylist: 3 }
];

// ============================================
// FAVOURITE LIST - Danh sách yêu thích
// ============================================
export const mockFavouriteLists = [
  { IDFavouriteList: 1, IDUser: 1, IDSong: 1 },
  { IDFavouriteList: 2, IDUser: 1, IDSong: 3 },
  { IDFavouriteList: 3, IDUser: 1, IDSong: 4 },
  { IDFavouriteList: 4, IDUser: 1, IDSong: 7 }
];

// ============================================
// LISTEN HISTORY - Lịch sử nghe
// ============================================
export const mockListenHistory = [
  { IDListen: 1, IDUser: 1, IDSong: 1, ListenDate: "2024-12-20T10:30:00" },
  { IDListen: 2, IDUser: 1, IDSong: 2, ListenDate: "2024-12-20T11:15:00" },
  { IDListen: 3, IDUser: 1, IDSong: 3, ListenDate: "2024-12-20T14:20:00" },
  { IDListen: 4, IDUser: 1, IDSong: 1, ListenDate: "2024-12-19T20:45:00" },
  { IDListen: 5, IDUser: 1, IDSong: 4, ListenDate: "2024-12-19T21:30:00" },
  { IDListen: 6, IDUser: 1, IDSong: 7, ListenDate: "2024-12-18T16:00:00" },
  { IDListen: 7, IDUser: 1, IDSong: 5, ListenDate: "2024-12-18T17:30:00" }
];

// ============================================
// HELPER FUNCTIONS - Hàm tiện ích
// ============================================

/**
 * Lấy thông tin nghệ sĩ của bài hát
 */
export const getArtistsBySongId = songId => {
  const artistSongLinks = mockArtistSongs.filter(as => as.IDSong === songId);
  return artistSongLinks.map(link => {
    const artist = mockArtists.find(a => a.IDArtist === link.IDArtist);
    return {
      ...artist,
      Role: link.Role
    };
  });
};

/**
 * Lấy tên nghệ sĩ của bài hát (formatted string)
 */
export const getArtistNamesBySongId = songId => {
  const artists = getArtistsBySongId(songId);
  const mainArtists = artists.filter(a => a.Role === "Main Artist");
  const featured = artists.filter(a => a.Role === "Featured");

  let result = mainArtists.map(a => a.Name).join(", ");
  if (featured.length > 0) {
    result += " ft. " + featured.map(a => a.Name).join(", ");
  }

  return result;
};

/**
 * Lấy thể loại của bài hát
 */
export const getGenresBySongId = songId => {
  const genreSongLinks = mockGenreSongs.filter(gs => gs.IDSong === songId);
  return genreSongLinks.map(link => mockGenres.find(g => g.IDGenre === link.IDGenre));
};

/**
 * Lấy thông tin album của bài hát
 */
export const getAlbumBySongId = songId => {
  const song = mockSongs.find(s => s.IDSong === songId);
  if (!song || !song.IDAlbum) return null;

  const album = mockAlbums.find(a => a.IDAlbum === song.IDAlbum);
  if (!album) return null;

  const artist = mockArtists.find(a => a.IDArtist === album.IDArtist);

  return {
    ...album,
    Artist: artist
  };
};

/**
 * Lấy danh sách bài hát trong playlist
 */
export const getSongsByPlaylistId = playlistId => {
  const playlistSongLinks = mockPlaylistSongs.filter(ps => ps.IDPlaylist === playlistId);
  return playlistSongLinks.map(link => mockSongs.find(s => s.IDSong === link.IDSong)).filter(Boolean);
};

/**
 * Lấy danh sách playlist của user
 */
export const getPlaylistsByUserId = userId => {
  return mockPlaylists.filter(p => p.IDUser === userId);
};

/**
 * Lấy danh sách bài hát yêu thích của user
 */
export const getFavouriteSongsByUserId = userId => {
  const favouriteLinks = mockFavouriteLists.filter(f => f.IDUser === userId);
  return favouriteLinks.map(link => mockSongs.find(s => s.IDSong === link.IDSong)).filter(Boolean);
};

/**
 * Lấy lịch sử nghe của user (sắp xếp theo thời gian)
 */
export const getListenHistoryByUserId = userId => {
  const history = mockListenHistory.filter(h => h.IDUser === userId).sort((a, b) => new Date(b.ListenDate) - new Date(a.ListenDate));

  return history.map(h => ({
    ...h,
    Song: mockSongs.find(s => s.IDSong === h.IDSong)
  }));
};

/**
 * Lấy bài hát gần đây (unique songs, không trùng lặp)
 */
export const getRecentSongsByUserId = (userId, limit = 20) => {
  const history = getListenHistoryByUserId(userId);
  const uniqueSongs = [];
  const seenIds = new Set();

  for (const item of history) {
    if (!seenIds.has(item.IDSong)) {
      seenIds.add(item.IDSong);
      uniqueSongs.push(item.Song);
      if (uniqueSongs.length >= limit) break;
    }
  }

  return uniqueSongs;
};

/**
 * Lấy bài hát trong album
 */
export const getSongsByAlbumId = albumId => {
  return mockSongs.filter(s => s.IDAlbum === albumId);
};

/**
 * Lấy album của nghệ sĩ
 */
export const getAlbumsByArtistId = artistId => {
  return mockAlbums.filter(a => a.IDArtist === artistId);
};

/**
 * Format bài hát cho player (chuyển đổi sang format cũ)
 */
export const formatSongForPlayer = song => {
  if (!song) return null;

  return {
    id: song.IDSong,
    title: song.Title,
    singer: getArtistNamesBySongId(song.IDSong),
    src: song.Path,
    img: song.Avatar,
    lyrics: song.Lyrics,
    duration: song.Duration,
    views: song.Views
  };
};

/**
 * Format nhiều bài hát cho player
 */
export const formatSongsForPlayer = songs => {
  return songs.map(song => formatSongForPlayer(song)).filter(Boolean);
};

// ============================================
// DEFAULT EXPORTS
// ============================================
export default {
  artists: mockArtists,
  albums: mockAlbums,
  genres: mockGenres,
  songs: mockSongs,
  artistSongs: mockArtistSongs,
  genreSongs: mockGenreSongs,
  users: mockUsers,
  playlists: mockPlaylists,
  playlistSongs: mockPlaylistSongs,
  favouriteLists: mockFavouriteLists,
  listenHistory: mockListenHistory,

  // Helper functions
  getArtistsBySongId,
  getArtistNamesBySongId,
  getGenresBySongId,
  getAlbumBySongId,
  getSongsByPlaylistId,
  getPlaylistsByUserId,
  getFavouriteSongsByUserId,
  getListenHistoryByUserId,
  getRecentSongsByUserId,
  getSongsByAlbumId,
  getAlbumsByArtistId,
  formatSongForPlayer,
  formatSongsForPlayer
};
