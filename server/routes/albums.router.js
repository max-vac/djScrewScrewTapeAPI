const express = require('express');
const albumsController = require('../controllers/albums.controller');

const albumsRouter = express.Router();

albumsRouter.get('/', albumsController.httpGetAllAlbums);
albumsRouter.get('/:id', albumsController.httpGetAlbumById);
albumsRouter.post('/', albumsController.httpCreateNewAlbum);

module.exports = albumsRouter;
