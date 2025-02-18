import { dataSongs, audio, playButton } from "./playSong.js";
import { nextButton } from "./playNextSong.js";
import { previousButton } from "./playPreviousSong.js";
import { removeClassActive } from "./helper.js";

export const pauseButton = document.querySelector(".pause");

export const pauseSong = () => {
  dataSongs.songCurrentTime = audio.currentTime;
  playButton.classList.remove("play");
  nextButton.classList.remove("next");
  previousButton.classList.remove("previous");
  pauseButton.classList.add("pause");
  removeClassActive();
  audio.pause();
};
