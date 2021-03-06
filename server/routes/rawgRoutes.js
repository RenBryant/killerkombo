const axios = require('axios');
const dotenv = require('dotenv').config();

const API_KEY = process.env.RAWG_API_KEY;

module.exports = function (app) {
    app.get("/api/games", (req, res) => {
        axios.get("https://api.rawg.io/api/games?page_size=3&key=" + API_KEY).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/games/:id", (req, res) => {
        axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=` + API_KEY).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    }    
    )


    app.get("/api/genres", (req, res) => {
        axios.get("https://api.rawg.io/api/genres?key=" + API_KEY).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        }
    )
    }
    )

    app.get("/api/genres/:id", (req, res) => {
        axios.get(`https://api.rawg.io/api/genres/${req.params.id}?key=` + API_KEY).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    }    
    )

    app.get("/api/search/:game", (req, res) => {
        axios.get("https://api.rawg.io/api/games?search=" + req.params.game + '&key=' + API_KEY).then(results => {
            let data = results.data
            res.json(data)
        }).catch(err => {
            res.json(err)
        }
    )
    }
    )

};