const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const albumsRouter = require('./routes/albums.router');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use('/albums', albumsRouter);

module.exports = app;
