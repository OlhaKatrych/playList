import allSongs from "../js/array.json";
import { sortedSongs } from "../js/helper";
export let dataSong = {
    songs: sortedSongs([...allSongs]),
    currentSong: null,
    songCurrentTime: 0,
  };