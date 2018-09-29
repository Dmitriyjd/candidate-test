var mongoose = require("mongoose");
var schema =  mongoose.Schema({
    _id: 'string',
    firstName: 'string',
    secondName: 'string',
    email: 'string',
    birthDate: 'string',
    book: 'array'
});

var Author = mongoose.model('Author', schema);
module.exports = Author;