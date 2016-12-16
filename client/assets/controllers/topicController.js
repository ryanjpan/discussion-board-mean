app.controller('topicController', ['$scope','topicsFactory', 'postsFactory', 'commentsFactory', '$location', '$routeParams', '$rootScope',
function(sc, tf, pf, cf, loc, rp, rs) {
    function show(){
            tf.show(rp.id, function(topic){
            sc.topic = topic;
        })
    }

    show();

    sc.addPost = function(){
        sc.newPost.user = rs.user.name;
        sc.newPost.topicId = rp.id;
        pf.create(sc.newPost);
        sc.newPost = {}
    }

    sc.addComment = function(ind, text){
        var newComment = {
            postId: sc.topic.posts[ind]._id,
            user: rs.user.name,
            text: text
        }
        cf.create(newComment);
        show();
    }

    sc.upvote = function(ind){
        var update = {
            isLike: true,
            postId: sc.topic.posts[ind]._id
        }
        pf.update(update);
        show();
    }
    sc.downvote = function(ind){
        var update = {
            isLike: false,
            postId: sc.topic.posts[ind]._id
        }
        pf.update(update);
        show();
    }

}]);
