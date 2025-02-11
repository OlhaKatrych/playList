import allSongs from "./array.json";
import { sortedSongs } from "./helper";
export let dataSong = {
    songs: sortedSongs([...allSongs]),
    currentSong: null,
    songCurrentTime: 0,
  };