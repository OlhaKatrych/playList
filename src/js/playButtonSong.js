import { dataSongs, playSong } from "./playSong.js";
import { setEqualIsActive, setProgressBarIsActive } from "./helper.js";
import { pauseButton } from "./pauseSong.js";
import { nextButton } from "./playNextSong.js";
import { previousButton } from "./playPreviousSong.js";
import { playButton } from "./playSong.js";

export const playButtonSong = () => {
  if (dataSongs.currentSong === null) {
    playSong(dataSongs.songs[0].id);
  } else {
    playSong(dataSongs.currentSong.id);
  }
  // Equalizer
  setEqualIsActive();
  // Progress bar
  setProgressBarIsActive();
  pauseButton.classList.remove("pause");
  nextButton.classList.remove("next");
  previousButton.classList.remove("previous");
  playButton.classList.add("play");
};
