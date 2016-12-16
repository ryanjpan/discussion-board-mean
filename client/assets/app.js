var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        })
        .when('/topic/:id',{
            templateUrl: 'partials/topic.html',
            controller: 'topicController'
        })
        .when('/dashboard',{
             templateUrl: 'partials/dash.html',
             controller: 'dashController'
        })
        .when('/user/:name',{
            templateUrl: 'partials/user.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/'
        })
});
