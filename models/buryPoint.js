var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BurypointSchema = new Schema({
    guid:  String,
    url: String,
    pv: 1,
    uv: 1
});

BurypointSchema.pre('save', function(next){
    console.log('in model');
    var now = new Date();
    this.date = now;
    console.log(next, 'next')
    next();
});

exports.Burypoint = mongoose.model('Comment', BurypointSchema)