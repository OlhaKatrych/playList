import { dataSong } from "./dataSong.js";
import { createMurkup } from "./createMarkup.js";
import { playSong } from "./playSong.js";

const playButton = document.getElementById("play");

createMurkup(dataSong.songs);
playButton.addEventListener("click", () => {
  
  if (dataSong.currentSong === null) {
    playSong(dataSong.songs[0].id);
  } else {
    playSong(dataSong.currentSong.id);
  }
  playButton.classList.add("playing");
});
