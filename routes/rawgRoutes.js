const axios = require('axios');

module.exports = function(app) {
    app.get('/api/rawg/games', function(req, res) {
        axios.get('https://api.rawg.io/api/games=?page_size=12=API_KEY=')
        .then(function(response) {
            res.json(response.data);
        })
        .catch(function(error) {
            console.log(error);
        }
        );
    }
)};