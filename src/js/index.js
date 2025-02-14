import { dataSongs } from "./playSong";
import { createMurkup } from "./createMarkup.js";
import { playSong } from "./playSong.js";
import { audio, playButton } from "./playSong";
import { playNextSong } from "./playNextSong";
import { pauseButton, nextButton } from "./playNextSong";

createMurkup(dataSongs.songs);

nextButton.classList.remove("next");
pauseButton.classList.remove("pause");

playButton.addEventListener("click", () => {
  if (dataSongs.currentSong === null) {
    playSong(dataSongs.songs[0].id);
  } else {
    playSong(dataSongs.currentSong.id);
  }
  pauseButton.classList.remove("pause");
  nextButton.classList.remove("next");
  playButton.classList.add("playing");
});

pauseButton.addEventListener("click", () => {
  dataSongs.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  nextButton.classList.remove("next");
  pauseButton.classList.add("pause");
  audio.pause();
});

nextButton.addEventListener("click", playNextSong);
