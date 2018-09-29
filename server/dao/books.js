var Book = require("../models/books.js");

/**
 * Send books collection
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function getBooks(callback) {
    Book.find({}, (err, result) => {
        callback && callback(err, result);
});
}

/**
 * Send specific book entity by id
 * @param {Object} _id - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function getBookById(_id, callback){
    Book.find({ _id }, (err, result) => {
        callback && callback(err, result);
});
}

/**
 * Create new book entity
 * @param {Object} book - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function createBook(book, callback) {
    Book.create(book, (err, result) => {
        callback && callback(err, result);
});
}

/**
 * Remove specific book entity by id
 * @param {Number} id - Book id
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function removeBook(id, callback){
    Book.deleteOne({'_id' : id}, (err, result) => {
        callback && callback(err, result);
});
}

/**
 * Update specific book entity by id
 * @param {Number} id - Book id
 * @param {Object} book - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function updateBook(id, book, callback){
    Book.findOneAndUpdate({'_id': id},book,{new:true}, (err, result) => {
        callback && callback(err, result);
});
}

/**
 * update specific book filed/property
 * @param {Number} id - Book id
 * @param {Object} book - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function editBook(id, book, callback){
    Book.findOneAndUpdate({'_id': id},book,{new:true}, (err, result) => {
        callback && callback(err, result);
    });
}


module.exports = {getBooks, createBook, getBookById, removeBook, updateBook, editBook};