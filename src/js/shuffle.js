//import { getDataSong } from "./getDataFromJASON.js";
import { createMurkup } from "./createMarkup.js";
import { pauseSong } from "./pauseSong.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";

//const dataSongShuffle = await getDataSong();
import { dataSongs } from "./playSong.js";

export const shuffleButton = document.querySelector(".shuffle");

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
export const shuffle = () => {
  shuffleArray(dataSongs.songs);
  dataSongs.currentSong = null;
  dataSongs.songCurrentTime = 0;

  createMurkup(dataSongs.songs);
  pauseSong();
  setPlayerDisplay();
};
