const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const albumsRouter = require('./routes/albums.router');
const songsRouter = require('./routes/songs.router');
const artistsRouter = require('./routes/artists.router');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use('/albums', albumsRouter);
app.use('/songs', songsRouter);
app.use('/artists', artistsRouter);

module.exports = app;
