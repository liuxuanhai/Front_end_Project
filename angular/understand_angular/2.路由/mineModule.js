var mineModule = angular.module('mineModule',['ngRoute']);
    mineModule.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/mine',{
            template:'<h3>{{info}}</h3>',
            controller:'mineController'
        })
    }]);
    mineModule.controller('mineController',function($scope){
        $scope.info = 'ζηι³δΉ';
    });