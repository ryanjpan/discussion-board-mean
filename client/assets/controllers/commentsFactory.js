app.factory('commentsFactory', ['$http', function($http) {
    function commentsFactory(){
        this.create = function(newComment, callback){
            $http.post('/comment', newComment).then(function(json){
                callback(json.data);
            });
        }

    }
    return new commentsFactory();
}]);
