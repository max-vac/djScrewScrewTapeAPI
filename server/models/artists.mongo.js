const mongoose = require('mongoose');

const artistModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  albums: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Album',
  },
  songs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Song',
  },
});

module.exports = mongoose.model('Artist', artistModel);
