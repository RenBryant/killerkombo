const mongoose = require("mongoose");
const { Schema } = mongoose;

const savedGamesSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

const SavedGames = mongoose.model("SavedGames", savedGamesSchema);

module.exports = SavedGames;