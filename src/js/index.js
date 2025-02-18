import { dataSongs, playSong, playButton } from "./playSong.js";
import { createMurkup } from "./createMarkup.js";
import { playNextSong, nextButton } from "./playNextSong.js";
import { previousButton, playPreviousSong } from "./playPreviousSong.js";
import { pauseButton, pauseSong } from "./pauseSong.js";
import { getCurrentSongEqualizer } from "./helper.js";

createMurkup(dataSongs.songs);

playButton.classList.remove("play");
previousButton.classList.remove("previous");
nextButton.classList.remove("next");
pauseButton.classList.remove("pause");

playButton.addEventListener("click", () => {
  if (dataSongs.currentSong === null) {
    playSong(dataSongs.songs[0].id);
  } else {
    playSong(dataSongs.currentSong.id);
  }
  const currentEqualizer = getCurrentSongEqualizer();
  if (currentEqualizer) {
    currentEqualizer.classList.add("active");
  }
  pauseButton.classList.remove("pause");
  nextButton.classList.remove("next");
  previousButton.classList.remove("previous");
  playButton.classList.add("play");
});

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);
