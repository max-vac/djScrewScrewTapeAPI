const Song = require('./songs.mongo');

const getAllSongs = async () => {
  const allSongs = Song.find()
    .populate({
      path: 'artists',
      model: 'Artist',
      select: 'name',
    })
    .populate({
      path: 'albums',
      model: 'Album',
      select: 'title',
    });

  return allSongs;
};

module.exports = {
  getAllSongs,
};
