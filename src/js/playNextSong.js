import { dataSongs, playSong, playButton } from "./playSong.js";
import { getCurrentIndexSong } from "./helper.js";
import { pauseButton } from "./pauseSong.js";
import { previousButton } from "./playPreviousSong.js";
import {
  removeClassActive,
  setEqualIsActive,
  removeClassActiveProgressBar,
  setProgressBarIsActive,
} from "./helper.js";

export const nextButton = document.querySelector(".next");

export const playNextSong = () => {
  if (dataSongs.currentSong === null) {
    playSong(dataSongs.songs[0].id);
  } else {
    const currentIndex = getCurrentIndexSong();
    const nextSongs = dataSongs.songs[currentIndex + 1];
    playSong(nextSongs.id);
  }
  // Equalizer
  removeClassActive();
  setEqualIsActive();
  // Progress Bar
  removeClassActiveProgressBar();
  setProgressBarIsActive();
  previousButton.classList.remove("previous");
  playButton.classList.remove("play");
  pauseButton.classList.remove("pause");
  nextButton.classList.add("next");
};
