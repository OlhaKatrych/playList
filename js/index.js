import {getDataSong} from "./getDataFromJASON.js";

import { createMurkup } from "./createMarkup.js";
import { playSong } from "./playSong.js";

const playButton = document.getElementById("play");
const dataSongs = await getDataSong();
console.log(dataSongs)
createMurkup(dataSongs.songs);
playButton.addEventListener("click", () => {
  if (dataSong.currentSong === null) {
    playSong(dataSong.songs[0].id);
  } else {
    playSong(dataSong.currentSong.id);
  }
  playButton.classList.add("playing");
});
