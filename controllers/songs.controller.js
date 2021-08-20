const { getAllSongs, getSongById } = require('../models/songs.model');

const httpGetAllSongs = async (req, res) => {
  const allSongs = await getAllSongs();

  return res.status(200).json(allSongs);
};

const httpGetSongById = async (req, res) => {
  const id = req.params.id;

  const song = await getSongById(id);

  return res.status(200).json(song);
};

module.exports = {
  httpGetAllSongs,
  httpGetSongById,
};
