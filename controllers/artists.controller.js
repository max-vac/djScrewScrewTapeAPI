

async createNewArtist = (artist) => {
  artists.insert({
    name: artist,
    albums: [],
    songs: [],
  })
}