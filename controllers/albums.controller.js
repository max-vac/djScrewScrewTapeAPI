const albumsMongo = require('../models/albums.mongo');
const { createNewAlbum } = require('../models/albums.model');

const httpCreateNewAlbum = async (req, res) => {
  const album = req.body;

  if (
    !album.title ||
    !album.chapter ||
    !album.songs ||
    !album.year ||
    !album.image ||
    !album.price ||
    !album.link
  ) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  console.log('contorller');
  await createNewAlbum(album);
  return res.status(200).json(album);
};

module.exports = {
  httpCreateNewAlbum,
};
