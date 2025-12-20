import playlistMock from "../mock/playlistMock";

export const songService = {
  getAllSongs: async () => {
    return Promise.resolve(playlistMock);
  },

  getSongById: async id => {
    return Promise.resolve(playlistMock.find(song => song.id === id));
  }
};
