angular
    .module('libraryApp', ['ngRoute', 'books'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: '/app/home.html'
            });
    });