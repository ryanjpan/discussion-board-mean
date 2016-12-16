app.factory('topicsFactory', ['$http', function($http) {
    var topics = [];
    var topic = {};
    function topicsFactory(){
        this.create = function(newTopic, callback){
            $http.post('/topic', newTopic).then(function(json){
                callback(json.data);
            });
        }

        this.index = function(callback){
            $http.get('/topics').then(function(json){
                callback(json.data);
            });
        }

        this.show = function(id, callback){
            $http.get('/topic/' + id).then(function(json){
                callback(json.data);
            });
        }

    }
    return new topicsFactory();
}]);
