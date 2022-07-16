const mongoose = require('mongoose');

const GameSchema = newSchema ({
    id: {
        type: Number,
        unique: true,
        required: true,
    }, 
    title: {
        type: String,
        required: true
    }, 
    released: {
        type: Date, 
        required: true
    },
    creators: {
        type: [String],
        required: true
    }, 
    genres: {
        type: [String],
        required: true
    }, 
    platforms: {
        type: [String],
        required: true
    }, 
    link: {
        type: String,
        required: true
    }, 
    description: {
        type: [String],
        required: true
    }, 
    image: {
        type: String,
        required: true
    }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
