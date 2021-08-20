const { getAllArtists, getArtistById } = require('../models/artist.model');

const httpGetAllArtists = async (req, res) => {
  const artists = await getAllArtists();

  return res.status(200).json(artists);
};

const httpGetArtistById = async (req, res) => {
  const id = req.params.id;

  const artistById = await getArtistById(id);

  return res.status(200).json(artistById);
};

module.exports = {
  httpGetAllArtists,
  httpGetArtistById,
};
