import { dataSongs } from "./playSong.js";

export const sortedSongs = (array) => {
  return array.toSorted((song1, song2) =>
    song1.title.localeCompare(song2.title)
  );
};

export const getCurrentIndexSong = () =>
  dataSongs.songs.indexOf(dataSongs.currentSong);

export const getCurrentSongEqualizer = () => {
  if (!dataSongs.currentSong) return null;
  return document.querySelector(`[data-id="${dataSongs.currentSong.id}"].equalizer .active`);
};
