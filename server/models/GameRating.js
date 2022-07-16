const mongoose = require('mongoose')

const GameRatingSchema = {
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
}

module.exports =
  mongoose.models.GameRating || mongoose.model('GameRating', GameRatingSchema)