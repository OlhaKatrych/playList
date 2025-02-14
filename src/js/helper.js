export const sortedSongs = (array) => {
  return array.toSorted((song1, song2) =>
    song1.title.localeCompare(song2.title)
  );
};

