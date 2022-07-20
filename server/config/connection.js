const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/killerkombo',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }, function(err) {
    if (err) {
      console.log(err);
    }
    // mongoose.connection.db.dropDatabase();
    // console.log('dropped')
  }
);

module.exports = mongoose.connection;