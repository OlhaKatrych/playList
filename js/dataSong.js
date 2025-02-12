import { sortedSongs } from "./helper.js";
import data from "./array.json";
export const dataSong = {
  songs: sortedSongs([...data]),
  currentSong: null,
  songCurrentTime: 0,
};
