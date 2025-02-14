import { playSong, dataSongs } from "./playSong.js";
export const pauseButton = document.querySelector(".pause");
export const nextButton = document.querySelector(".next");
const getCurrentIndexSong = () =>
  dataSongs.songs.indexOf(dataSongs.currentSong);

export const playNextSong = () => {
  if (dataSongs.currentSong === null) {
    playSong(dataSongs.songs[0].id);
  } else {
    const currentIndex = getCurrentIndexSong();
    const nextSongs = dataSongs.songs[currentIndex + 1];
    playSong(nextSongs.id);
    pauseButton.classList.remove("pause");
    ne.equalizer;
  }
};
