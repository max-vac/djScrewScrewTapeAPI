const mongoose = require('mongoose');

const songModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artists: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Artist',
  },
  albums: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Album',
  },
});

module.exports = mongoose.model('Song', songModel);
