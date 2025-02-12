import allSongs from "./array";
import { sortedSongs } from "./helper.js";
export let dataSong = {
    songs: sortedSongs([...allSongs]),
    currentSong: null,
    songCurrentTime: 0,
  };