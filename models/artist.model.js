const Artist = require('./artists.mongo');

const getAllArtists = async () => {
  const allArtists = Artist.find()
    .populate({
      path: 'albums',
      model: 'Album',
      select: 'title',
    })
    .populate({
      path: 'songs',
      model: 'Song',
      select: 'title',
    });

  return allArtists;
};

module.exports = {
  getAllArtists,
};
