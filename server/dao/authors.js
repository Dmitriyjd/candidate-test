var Author = require("../models/authors.js");

/**
 * Send full list of authors
 * @param {Object} callback - HTTP request object
 * @returns {void} author collection
 */
function getAuthors(callback) {
    Author.find({}, (err, result) => {
        callback && callback(err, result);
    });
}

/**
 * Send specific author entity by id
 * @param {Object} id - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function getAuthorById(id, callback){
    Author.find({_id:id}, (err, result) => {
        callback && callback(err, result);
    });
}

/**
 * Add specific author entity
 * @param {Object} author - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function addAuthor(author, callback) {
    Author.create(author, (err, result) => {
        callback && callback(err, result);
    });
}

/**
 * Remove specific author entity by id
 * @param {Object} id - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function removeAuthor(id, callback){
    Author.deleteOne({'_id' : id}, (err, result) => {
        callback && callback(err, result);
    });
}

/**
 * Update specific author entity by id
 * @param {Object} id - HTTP request object
 * @param {Object} author - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function updateAuthor(id, author, callback){
    // override immutable field
    const authorToUpdate =  Object.assign(author, { _id: id });
    Author.findOneAndUpdate({"_id": id}, authorToUpdate, {new:true}, (err, result) => {
        callback && callback(err, result);
    });
}

/**
 * Send specific author entity by id
 * @param {Object} author - HTTP request object
 * @param {Object} callback - HTTP request object
 * @returns {void}
 */
function editAuthor(author, callback){
    Author.findOneAndUpdate({'id':author._id},author,{new:true}, (err, result) => {
        callback && callback(err, result);
    });
}


module.exports = {getAuthors,editAuthor, addAuthor, getAuthorById, removeAuthor, updateAuthor};