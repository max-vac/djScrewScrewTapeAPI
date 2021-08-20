const { getAllSongs } = require('../models/songs.model');

const httpGetAllSongs = async (req, res) => {
  const allSongs = await getAllSongs();

  return res.status(200).json(allSongs);
};

module.exports = {
  httpGetAllSongs,
};
