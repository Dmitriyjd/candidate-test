var mongoose = require("mongoose");
var schema =  mongoose.Schema({
    name: 'string',
    author: 'array',
    publishing: 'string',
    ebook: 'bool',
    year: 'string',
    isbn: 'string',
    pages: 'string',
    _id: 'string'
});

var Book = mongoose.model('Book', schema);
module.exports = Book;