import allSongs from "./array.json" assert { type: 'json' };
import { sortedSongs } from "./helper.js";
export let dataSong = {
    songs: sortedSongs([...allSongs]),
    currentSong: null,
    songCurrentTime: 0,
  };