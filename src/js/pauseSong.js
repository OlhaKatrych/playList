import { dataSongs, audio, playButton } from "./playSong.js";
import { nextButton } from "./playNextSong.js";
import { previousButton } from "./playPreviousSong.js";
import { getCurrentSongEqualizer } from "./helper.js";

export const pauseButton = document.querySelector(".pause");

export const pauseSong = () => {
  dataSongs.songCurrentTime = audio.currentTime;
  playButton.classList.remove("play");
  nextButton.classList.remove("next");
  previousButton.classList.remove("previous");
  pauseButton.classList.add("pause");
  const currentEqualizer = getCurrentSongEqualizer();
  console.log(currentEqualizer);
  if (currentEqualizer) {
    currentEqualizer.classList.remove("active");
  }

  audio.pause();
};
