var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

function PostsController(){
    this.create = function(req, res){
        Topic.findOne({_id: req.body.topicId}, function(err, topic){
            if(err){
                res.json({err:err})
            }
            else{
                var post = new Post();
                post.user = req.body.user;
                post.text = req.body.text;
                post.save(function(err){
                    if(err){
                        res.json({err: err});
                    }
                    else{
                        topic.posts.push(post);
                        topic.save(function(err){
                            if(err){
                                res.json({err: err});
                            }
                            else{
                                res.json('created');
                            }
                        })
                    }
                })
            }
        })

        User.findOne({name: req.body.user}, function(err, user){
            user.posts++;
            user.save(function(err){

            })
        })
    }
    this.show = function(req,res){
        Post.findOne({_id: req.params.id})
        .populate('comments')
        .exec(function(err, post){
            if(err){
                res.json({err: err});
            }
            else{
                res.json(post);
            }
        })
    };
    this.update = function(req, res){
        Post.findOne({_id: req.params.id}, function(err, post){
            if(err){
                res.json({err: err});
            }
            else{
                //check if the like or dislike button clicked
                if(req.body.isLike){
                    post.upvotes++;
                }
                else{
                    post.downvotes++;
                }
                post.save(function(err){
                    if(err){
                        res.json({err:err})
                    }
                    else{
                        res.json('updated')
                    }
                })
            }
        })
    }


}

module.exports = new PostsController();
