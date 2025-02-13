import { getDataSong } from "./getDataFromJASON.js";
import { createMurkup } from "./createMarkup.js";
import { playSong } from "./playSong.js";

const playButton = document.getElementById("play");
const dataSongs = await getDataSong();
createMurkup(dataSongs.songs);
playButton.addEventListener("click", () => {
  if (dataSongs.currentSong === null) {
    playSong(dataSongs.songs[0].id);
  } else {
    playSong(dataSongs.currentSong.id);
  }
  playButton.classList.add("playing");
});
