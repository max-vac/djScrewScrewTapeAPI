const Album = require('./albums.mongo');
const Song = require('./songs.mongo');
const Artist = require('./artists.mongo');
const mongoose = require('mongoose');

const generateSong = async (songs, albumId) => {
  let track = 1;
  let disc1 = true;

  for (let song of songs) {
    if (song.disc === 2 && disc1) {
      track = 1;
      disc1 = false;
    }

    const firstArtist = await Artist.findOne({
      name: song.artists[0],
    });

    let songExists = await Song.findOne({
      title: song.title,
      artists: mongoose.Types.ObjectId(firstArtist?._id),
    });

    if (!songExists) {
      songExists = await Song.create({
        title: song.title,
      });

      console.log('create method: ', songExists);

      for (let artist of song.artists) {
        const newArtist = await Artist.findOneAndUpdate(
          { name: artist },
          {
            $push: { songs: songExists._id },
            $addToSet: { albums: albumId },
          },
          { upsert: true, new: true },
        );

        songExists = await Song.findOneAndUpdate(
          { _id: songExists._id },
          {
            $push: { artists: newArtist._id },
            $addToSet: { albums: albumId },
          },
          { upsert: true, new: true },
        );
      }
    }

    await Album.findOneAndUpdate(
      { _id: albumId },
      {
        $push: {
          songs: {
            disc: song.disc,
            track: track,
            song: songExists._id,
          },
        },
      },
      {
        upsert: true,
        new: true,
      },
    );

    track++;
  }
};

const createNewAlbum = async (album) => {
  if (!album) {
    throw new Error('albums model: No Album input');
  }

  const newAlbum = await Album.create({
    title: album.title,
    chapter: album.chapter,
    year: album.year,
    image: album.image,
    price: album.price,
    link: album.link,
  });

  generateSong(album.songs, newAlbum._id);
};

const getAlbumByChapter = async (chapter) => {
  const album = await Album.findOne({ chapter: chapter }).populate({
    path: 'songs.song',
    select: 'title',
    model: 'Song',
    populate: {
      path: 'artists',
      select: 'name',
      model: 'Artist',
    },
  });

  return album;
};

const getAllAlbums = async () => {
  const albums = await Album.find();

  return albums;
};

const getAlbumId = async (title) => {
  const album = await Album.findOne({
    title: { $regex: '^((?!string).)*$', $options: 'i' },
  }).select('_id');

  return album;
};

const getAlbumById = async (id) => {
  const album = await Album.findById(id).populate({
    path: 'songs.song',
    select: 'title',
    model: 'Song',
    populate: {
      path: 'artists',
      select: 'name',
      model: 'Artist',
    },
  });

  return album;
};

module.exports = {
  createNewAlbum,
  getAlbumByChapter,
  getAlbumId,
  getAlbumById,
  getAllAlbums,
};
