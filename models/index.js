var mongoose = require('mongoose');
var config   = require('../config');
// var logger = require('../common/logger')

mongoose.connect(config.db, {
  poolSize: 20,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.log('connect to %s error: ', config.db, err.message);
    // logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});
mongoose.connection.on('connected', function () {    
  console.log('Mongoose connection open to ' + config.db);  
});  
require('./comment');

exports.Comment = mongoose.model('Comment');
