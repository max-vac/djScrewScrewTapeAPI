const { getAllArtists } = require('../models/artist.model');

const httpGetAllArtists = async (req, res) => {
  const artists = await getAllArtists();

  return res.status(200).json(artists);
};

module.exports = {
  httpGetAllArtists,
};
