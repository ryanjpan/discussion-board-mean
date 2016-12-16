var mongoose = require('mongoose');
var obid = mongoose.Schema.Types.ObjectId;

var TopicSchema = new mongoose.Schema({
    user: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    category: {type: String, required: true},
    posts: [{type: obid, ref: "Post"}]
})

mongoose.model('Topic', TopicSchema);
