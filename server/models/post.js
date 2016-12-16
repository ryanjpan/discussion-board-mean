var mongoose = require('mongoose');
var obid = mongoose.Schema.Types.ObjectId;

var PostSchema = new mongoose.Schema({
    user: {type: String, required: true},
    text: {type: String, required: true},
    upvotes: {type: Number, required: true, default: 0},
    downvotes: {type: Number, required: true, default: 0},
    comments: [{type: obid, ref: "Comment"}]
})

mongoose.model('Post', PostSchema);
