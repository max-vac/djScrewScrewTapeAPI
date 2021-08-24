const albumsMongo = require('../models/albums.mongo');
const {
  createNewAlbum,
  getAlbumByChapter,
  getAlbumId,
  getAlbumById,
  getAllAlbums,
} = require('../models/albums.model');

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

  await createNewAlbum(album);
  return res.status(201).json(album);
};

const httpGetAllAlbums = async (req, res) => {
  const albums = await getAllAlbums();

  return res.status(200).json(albums);
};

const httpGetAlbumByChapter = async (req, res) => {
  const chapter = +req.params.chapter;

  if (!chapter) {
    return res.status(400).json({
      error: 'No valid album chapter',
    });
  }

  const album = await getAlbumByChapter(chapter);

  return res.status(200).json(album);
};

const httpGetAlbumId = async (req, res) => {
  const album = await getAlbumId(req.query.title);

  return res.status(200).json(album);
};

const httpGetAlbumById = async (req, res) => {
  console.log(typeof req.params.id);
  const id = req.params.id;
  const album = await getAlbumById(id);

  return res.status(200).json(album);
};

module.exports = {
  httpCreateNewAlbum,
  httpGetAlbumByChapter,
  httpGetAlbumId,
  httpGetAlbumById,
  httpGetAllAlbums,
};
