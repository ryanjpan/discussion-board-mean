var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

function CommentsController(){
    this.create = function(req, res){
        console.log(req.body);
        Post.findOne({_id: req.body.postId}, function(err, post){
            var comment = new Comment();
            comment.user = req.body.user;
            comment.text = req.body.text;
            comment.save(function(err){
                if(err){
                    res.json({err: err});
                }
                else{
                    post.comments.push(comment);
                    post.save(function(err){
                        if(err){
                            res.json({err: err});
                        }
                        else{
                            res.json('comment added');
                        }
                    });
                }
            });
        })
        User.findOne({name: req.body.user}, function(err, user){
            user.comments++;
            user.save(function(err){

            });
        })
    }
    this.show = function(req,res){
        Comment.findOne({_id: req.params.id}, function(err, comment){
            if(err){
                res.json({err: err});
            }
            else{
                res.json(comment);
            }
        })
    };


}

module.exports = new CommentsController();
