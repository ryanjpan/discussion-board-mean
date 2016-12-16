app.controller('loginController', ['$scope','usersFactory', '$location', '$rootScope',
function(sc, uf, loc, rs) {
    sc.create = function(){
        uf.create(sc.newUser, function(data){
            if(data.err){
                loc.url('/');
            }
            else{
                rs.user = data;
                loc.url('/dashboard');
            }
        });
    }

}]);
