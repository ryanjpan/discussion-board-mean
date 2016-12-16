var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    user: {type: String, required: true},
    text: {type: String, required: true},
})

mongoose.model('Comment', CommentSchema);
