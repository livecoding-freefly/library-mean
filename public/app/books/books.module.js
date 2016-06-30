angular
    .module('books', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/books', {
                templateUrl: '/app/books/bookList.html',
                controller: 'BookListController'
            })
            .when('/books/:bookId', {
                template: `Place for some book view`
            });
    });