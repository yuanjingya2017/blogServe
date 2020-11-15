var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    articleId:  String,
    name: String,
    comments: String,
    date: { type: Date, default: Date.now },
    email: String,
    commentsfor: String,
    personalWebsite: String,
    hidden: Boolean
});

CommentSchema.pre('save', function(next){
    console.log('in model');
    var now = new Date();
    this.updateDate = now;
    console.log(next, 'next')
    next();
});

exports.Comment = mongoose.model('Comment', CommentSchema)