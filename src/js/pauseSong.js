import { dataSongs, audio, playButton } from "./playSong.js";
import { nextButton } from "./playNextSong.js";
import { previousButton } from "./playPreviousSong.js";

export const pauseButton = document.querySelector(".pause");

export const pauseSong = () => {
  dataSongs.songCurrentTime = audio.currentTime;
  playButton.classList.remove("play");
  nextButton.classList.remove("next");
  previousButton.classList.remove("previous");
  pauseButton.classList.add("pause");
  document.querySelectorAll(".equalizer").forEach((el) => {
    el.classList.remove("active");
  });

  audio.pause();
};
