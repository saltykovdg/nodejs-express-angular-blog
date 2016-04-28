'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/partials/index',
                controller: IndexController
            }).
            when('/addPost', {
                templateUrl: '/partials/addPost',
                controller: AddPostController
            }).
            when('/readPost/:id', {
                templateUrl: '/partials/readPost',
                controller: ReadPostController
            }).
            when('/editPost/:id', {
                templateUrl: '/partials/editPost',
                controller: EditPostController
            }).
            when('/deletePost/:id', {
                templateUrl: '/partials/deletePost',
                controller: DeletePostController
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }
]);