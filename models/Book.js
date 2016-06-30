var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/library-mean');

module.exports = mongoose.model('Book', {name: String});