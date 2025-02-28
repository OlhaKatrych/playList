import { dataSongs } from "./playSong.js";
import { createMurkup } from "./createMarkup.js";
import { pauseSong } from "./pauseSong.js";
import { setPlayerDisplay } from "./setPlayerDisplay.js";

export const deleteSong = (id) => {
  if (dataSongs?.currentSong?.id === id) {
    dataSongs.currentSong = null;
    dataSongs.songCurrentTime = 0;
    pauseSong();
    setPlayerDisplay();
  }

  dataSongs.songs = dataSongs.songs.filter((song) => song.id !== id);

  createMurkup(dataSongs.songs);
};
