// const axios = require('axios');

// module.exports = function (app) {
//     app.get("/api/games", (req, res) => {
//         axios.get("https://api.rawg.io/api/games?" + API_KEY).then(results => {
//             let data = results.data
//             res.json(data)
//         }).catch(err => {
//             res.json(err)
//         })
//     })

//     app.get("/api/games/:id", (req, res) => {
//         axios.get("https://api.rawg.io/api/games?" + req.params.id + API_KEY).then(results => {
//             let data = results.data
//             res.json(data)
//         }).catch(err => {
//             res.json(err)
//         })
//     }    
//     )
// }

//     app.get("/api/genres", (req, res) => {
//         axios.get("https://api.rawg.io/api/genres?" + API_KEY).then(results => {
//             let data = results.data
//             res.json(data)
//         }).catch(err => {
//             res.json(err)
//         }
//     )
//     }
//     )

//     app.get