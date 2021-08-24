const mongoose = require('mongoose');

const albumModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  songs: [
    {
      disc: {
        type: Number,
        required: true,
      },
      track: {
        type: Number,
        required: true,
      },
      song: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
      },
    },
  ],
  year: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Album', albumModel);
