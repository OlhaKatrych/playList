import { playListSong } from "./playListSong.js";
import { deleteSong } from "./deleteSong.js";
const playlistSongs = document.querySelector("#playlist-songs");

export const createMurkup = (array) => {
  const songsMarkup = array
    .map((song) => {
      return `   <li id="song-${song.id}" class="playlist-song">
        <button type="button" class="playlist-song-info" data-id="${song.id}">
            <span class="playlist-song-title aria-label=${song.title}">${song.title}</span>
            <div class="progress-container">
              <div class="progress-bar" data-id="${song.id}"></div>
            </div>
            <span class="playlist-song-duration" aria-label=${song.duration}>0${song.duration}</span>
            <div class="equalizer" id="equalizer">
            <span class="equalizer-span"></span>
            <span class="equalizer-span"></span>
            <span class="equalizer-span"></span>
          </div>
        </button>
        <button type="button" class="playlist-song-delete" aria-label="Delete ${song.title}" data-id="${song.id}">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
          </button>
        </li>`;
    })
    .join("");

  playlistSongs.innerHTML = songsMarkup;
  playlistSongs.addEventListener("click", playListSong);

  playlistSongs.addEventListener("click", (e) => {
    const deleteButton = e.target.closest(".playlist-song-delete");
    if (!deleteButton) return;

    const songId = Number(deleteButton.dataset.id);
    deleteSong(songId);
  });
};
