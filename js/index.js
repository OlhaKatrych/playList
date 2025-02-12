import { dataSong } from "../js/dataSong";
import { createMurkup } from "../js/createMarkup";
import { playSong } from "../js/playSong";

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
