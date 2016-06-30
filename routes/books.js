var express = require('express');
var router = express.Router();
var Book = require('../models/Book');

router.get('/', function (req, res) {
    Book.find(function (err, books) {
        res.json(books);
    });
});

router.post('/', function (req, res) {
    new Book(req.body).save();
    res.json();
});

router.delete('/:bookId', function (req, res, next) {
    Book.remove({_id: req.params.bookId}, function (err) {
        if(err) next(err);
        console.log('Book with id ' + req.params.bookId + ' was deleted!!!');
        res.json();
    });
});

module.exports = router;
