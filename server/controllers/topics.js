var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

function TopicsController(){
    this.index = function(req, res){
        Topic.find({}, function(err, topics){
            if(err){
                console.log(err);
            }
            else{
                res.json(topics);
            }
        })
    }
    this.create = function(req, res){
        var topic = new Topic();
        topic.user = req.body.user;
        topic.title = req.body.title;
        topic.text = req.body.text;
        topic.category = req.body.category;
        topic.save(function(err){
            if(err){
                res.json({err: err});
            }
            else{
                res.json(topic);
            }
        })
        User.findOne({name: req.body.user}, function(err, user){
            user.topics = user.topics+1;
            user.save(function(err){
                if(err){
                    console.log(err);
                }
            })
        })
    }
    this.show = function(req,res){
        Topic.findOne({_id: req.params.id})
            .populate({
                path: 'posts',
                model: 'Post',
                populate: {
                    path: 'comments',
                    model: 'Comment'
                }
            })
            .exec(function(err, topic){
            if(err){
                res.json({err: err});
            }
            else{
                res.json(topic);
            }
        })
    };


}

module.exports = new TopicsController();
