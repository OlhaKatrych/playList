import { dataSongs, playSong, audio, playButton } from "./playSong.js";
import { createMurkup } from "./createMarkup.js";
import { playNextSong, pauseButton, nextButton } from "./playNextSong.js";

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
