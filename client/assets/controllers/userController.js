app.controller('userController', ['$scope','usersFactory', '$location', '$routeParams',
function(sc, uf, loc, rp) {
    uf.show(rp.name, function(user){
        console.log(user);
        sc.pageuser = user;
    })

}]);
