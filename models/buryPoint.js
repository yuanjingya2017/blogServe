var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BurypointSchema = new Schema({
    guid:  String,
    url: String,
    pv: Number,
    uv: Number,
    date: Date
});

BurypointSchema.pre('save', function(next){
    console.log('in model');
    var now = new Date();
    this.date = now;
    console.log(next, 'next')
    next();
});

exports.Burypoint = mongoose.model('Burypoint', BurypointSchema)