var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    topics: {type: Number, required: true, default: 0},
    posts: {type: Number, required: true, default: 0},
    comments: {type: Number, required: true, default: 0}
})

mongoose.model('User', UserSchema);
