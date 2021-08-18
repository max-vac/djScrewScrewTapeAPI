const express = require('express');
const albumsController = require('../controllers/albums.controller');

const albumsRouter = express.Router();

albumsRouter.post('/', albumsController.httpCreateNewAlbum);
albumsRouter.get('/:chapter', albumsController.httpGetAlbumByChapter);
albumsRouter.get('/', albumsController.httpGetAlbumId);

module.exports = albumsRouter;
