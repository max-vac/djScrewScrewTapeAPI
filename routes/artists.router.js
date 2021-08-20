const express = require('express');
const artistsController = require('../controllers/artists.controller');

const artistsRouter = express.Router();

artistsRouter.get('/', artistsController.httpGetAllArtists);
artistsRouter.get('/:id', artistsController.httpGetArtistById);

module.exports = artistsRouter;
