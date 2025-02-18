import { playSong } from "./playSong.js";
import { pauseButton } from "./pauseSong.js";
import { previousButton } from "./playPreviousSong.js";
import { playButton } from "./playSong.js";
import { nextButton } from "./playNextSong.js";
import { removeClassActive } from "./helper.js";

export const playListSong = (e) => {
  const button = e.target.closest(".playlist-song-info");
  if (!button) return;
  const songId = button.dataset.id;
  const songIdNumber = Number(songId);
  playSong(songIdNumber);
  removeClassActive();
  const currentSongElement = document.querySelector(
    `#song-${songIdNumber} .equalizer`
  );

  if (currentSongElement) {
    currentSongElement.classList.add("active");
  }
  pauseButton.classList.remove("pause");
  previousButton.classList.remove("previous");
  playButton.classList.remove("play");
  nextButton.classList.remove("next");
};
