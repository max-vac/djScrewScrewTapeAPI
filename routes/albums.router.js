const express = require('express');
const albumsController = require('../controllers/albums.controller');

const albumsRouter = express.Router();

albumsRouter.post('/', albumsController.httpCreateNewAlbum);

module.exports = albumsRouter;
