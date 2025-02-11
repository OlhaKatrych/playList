import { dataSong } from "./dataSong";
import { createMurkup } from "./createMarkup";
import { playSong } from "./playSong";

const playButton = document.getElementById("play");

createMurkup(dataSong.songs);
playButton.addEventListener("click", () => {
  if (dataSong.currentSong === null) {
    playSong(dataSong.songs[0].id);
  } else {
    playSong(dataSong.currentSong.id);
  }
});
