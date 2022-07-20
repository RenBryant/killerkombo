const mongoose = require('mongoose')
const { Schema } = require('mongoose');

const GameRatingSchema = new Schema ({
  game_id: {
    type: Number,
    unique: true,
    required: true,
  },
  game_name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
});

const GameRating = mongoose.model('GameRating', GameRatingSchema);

module.exports = GameRating;
