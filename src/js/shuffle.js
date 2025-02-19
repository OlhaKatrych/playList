import { getDataSong } from "./getDataFromJASON.js";
import { createMurkup } from "./createMarkup.js";
import { pauseSong } from "./pauseSong.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";
const dataSongShuffle = await getDataSong();
console.log(dataSongShuffle);

export const shuffleButton = document.querySelector(".shuffle");

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
export const shuffle = () => {
  shuffleArray(dataSongShuffle.songs);
  dataSongShuffle.currentSong = null;
  dataSongShuffle.songCurrentTime = 0;

  createMurkup(dataSongShuffle.songs);
  pauseSong();
  setPlayerDisplay();
};
