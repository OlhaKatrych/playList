import { dataSongs, playSong, playButton } from "./playSong.js";
import { pauseButton } from "./pauseSong.js";
import { nextButton } from "./playNextSong.js";
import { getCurrentIndexSong } from "./helper.js";

export const previousButton = document.querySelector(".previous");

export const playPreviousSong = () => {
  if (dataSongs.currentSong === null) return;
  else {
    const currentIndex = getCurrentIndexSong();
    if (currentIndex === 0) return;
    const previousSong = dataSongs.songs[currentIndex - 1];
    playSong(previousSong.id);
  }
  playButton.classList.remove("play");
  pauseButton.classList.remove("pause");
  nextButton.classList.remove("next");
  previousButton.classList.add("previous");
  document.querySelectorAll(".equalizer").forEach((el) => {
    el.classList.remove("active");
  });
};
