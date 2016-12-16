app.controller('dashController', ['$scope','topicsFactory', '$location', '$rootScope',
function(sc, tf, loc, rs) {
    sc.topics = [];
    var index = function(){
        tf.index(function(data){
            sc.topics = data;
        })
    }
    index();

    sc.addTopic = function(){
        sc.newTopic.user = rs.user.name;
        tf.create(sc.newTopic, function(data){
            console.log(data);
            sc.topics.push(data);
        })
        sc.newTopic = {}
    }
}]);
