app.factory('postsFactory', ['$http', function($http) {
    function postsFactory(){
        this.create = function(newPost){
            $http.post('/post', newPost).then(function(json){
                //console.log(json.data);
            });
        }
        this.update = function(update){
            $http.put('/post/'+update.postId, update).then(function(json){
                //console.log(json.data);
            })
        }

    }
    return new postsFactory();
}]);
