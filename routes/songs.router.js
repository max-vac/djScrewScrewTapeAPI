const express = require('express');
const songsController = require('../controllers/songs.controller');

const songsRouter = express.Router();

songsRouter.get('/', songsController.httpGetAllSongs);
songsRouter.get('/:id', songsController.httpGetSongById);

module.exports = songsRouter;
