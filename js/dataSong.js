import data from "./array.json";
console.log(data)
import { sortedSongs } from "./helper.js";
export let dataSong = {
  songs: sortedSongs([...data]),
  currentSong: null,
  songCurrentTime: 0,
};
