console.log('loading routes');
var topics = require('./../controllers/topics.js');
var posts = require('./../controllers/posts.js');
var comments = require('./../controllers/comments.js');
var users = require('./../controllers/users.js');

module.exports = function(app){
    app.get('/topics', topics.index);
    app.post('/topic', topics.create);
    app.get('/topic/:id', topics.show);
    app.get('/post/:id', posts.show);
    app.post('/post', posts.create);
    app.post('/comment', comments.create);
    app.post('/user', users.create);
    app.get('/user/:name', users.show);
    app.put('/post/:id', posts.update);
}
