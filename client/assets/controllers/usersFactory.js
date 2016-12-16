app.factory('usersFactory', ['$http', function($http) {
    var users = [];
    var user = {};
    function usersFactory(){
        this.create = function(newUser, callback){
            $http.post('/user', newUser).then(function(json){
                console.log(json);
                callback(json.data);
            });
        }
        this.show = function(name, callback){
            $http.get('/user/' + name).then(function(json){
                callback(json.data);
            })
        }


    }
    return new usersFactory();
}]);
