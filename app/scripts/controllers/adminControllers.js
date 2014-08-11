'use strict';

angular.module('spiritshopAdmin')
.constant('authUrl', 'http://localhost:5500/users/login')
.constant('ordersUrl', 'http://localhost:5500/orders')
.controller('authCtrl', function ($scope, $http, $location, authUrl) {

    $scope.authenticate = function (user, pass) {
        $http.post(authUrl, {
            username: user,
            password: pass
        }, {
            withCredentials: true
        }).success(function (data) {
            $location.path('/main');
        }).error(function (error) {
            $scope.authenticationError = error;
        });
    }
})