import { dataSongs } from "./playSong.js";

export const sortedSongs = (array) => {
  return array.toSorted((song1, song2) =>
    song1.title.localeCompare(song2.title)
  );
};

export const getCurrentIndexSong = () =>
  dataSongs.songs.indexOf(dataSongs.currentSong);

export const removeClassActive = () => {
  document.querySelectorAll(".equalizer").forEach((el) => {
    el.classList.remove("active");
  });
};

export const getCurrentSongValue = () => {
  if (!dataSongs.currentSong) return null;
  const equalIsActive = document.querySelector(
    `.playlist-song-info[data-id="${dataSongs.currentSong.id}"] .equalizer`
  );
  return equalIsActive;
};

export const setEqualIsActive = () => {
  const equalIsActive = getCurrentSongValue();
  if (equalIsActive) {
    equalIsActive.classList.add("active");
  }
};

export const removeClassActiveProgressBar = () => {
  document.querySelectorAll(".progress-bar.active").forEach((bar) => {
    bar.classList.remove("active");
    bar.style.width = "0%";
  });
};

export const getCurrentSongProgressBar = () => {
  if (!dataSongs.currentSong) return null;
  const equalIsActive = document.querySelector(
    `.playlist-song-info[data-id="${dataSongs.currentSong.id}"] .progress-bar`
  );
  return equalIsActive;
};

export const setProgressBarIsActive = () => {
  const equalIsActive = getCurrentSongProgressBar();
  if (equalIsActive) {
    equalIsActive.classList.add("active");
  }
};