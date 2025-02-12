import data from "./array.json" assert { type: 'json' };
import { sortedSongs } from "./helper.js";
export let dataSong = {
    songs: sortedSongs([...data]),
    currentSong: null,
    songCurrentTime: 0,
  };