'use strict';

/* Controllers */

function IndexController($scope, $http) {
    $http.get('/api/posts').success(function (data, status, headers, config) {
        $scope.posts = data.posts;
    });
}

function AddPostController($scope, $http, $location) {
    $scope.form = {title: '', text: ''};
    $scope.submitPost = function () {
        $http.post('/api/post', $scope.form).success(function (data) {
            $location.path('/');
        });
    };
}

function ReadPostController($scope, $http, $routeParams) {
    $http.get('/api/post/' + $routeParams.id).success(function (data) {
        $scope.post = data.post;
    });
}

function EditPostController($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/post/' + $routeParams.id).success(function (data) {
        $scope.form = data.post;
    });
    $scope.editPost = function () {
        $http.put('/api/post/' + $routeParams.id, $scope.form).success(function (data) {
            $location.url('/readPost/' + $routeParams.id);
        });
    };
}

function DeletePostController($scope, $http, $location, $routeParams) {
    $http.get('/api/post/' + $routeParams.id).success(function (data) {
        $scope.post = data.post;
    });
    $scope.deletePost = function () {
        $http.delete('/api/post/' + $routeParams.id).success(function (data) {
            $location.url('/');
        });
    };
    $scope.home = function () {
        $location.url('/');
    };
}
