const express = require('express');
const albumsController = require('../controllers/albums.controller');

const albumsRouter = express.Router();

albumsRouter.post('/', albumsController.httpCreateNewAlbum);
//albumsRouter.get('/chapter/:chapter', albumsController.httpGetAlbumByChapter);
albumsRouter.get('/', albumsController.httpGetAllAlbums);
albumsRouter.get('/:id', albumsController.httpGetAlbumById);

module.exports = albumsRouter;
