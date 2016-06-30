angular
    .module('books')
    .controller('BookListController', function ($scope, $http) {
        const bookApiEndpoint = "/api/books/";

        _updateBookList();

        $scope.addNewBook = function () {

            $http.post(bookApiEndpoint, {name: $scope.newBookName})
                .then(_updateBookList);
            $scope.newBookName = '';
        };

        $scope.removeBook = function (bookId) {
            $http.delete(bookApiEndpoint + bookId)
                .then(_updateBookList);
        };


        function _updateBookList() {
            $http.get(bookApiEndpoint)
                .then(function (response) {
                    $scope.books = response.data;
                });
        }
    });
