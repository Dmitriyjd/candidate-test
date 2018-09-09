'use strict';
var Books = require("../dao/books.js");

/**
 * Send book entity collection
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getBooks(req, res) {
    Books.getBooks(
        function (err, result) {
            res.send(result);
        }
    )
}

/**
 * Send specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getBookById(req, res) {
    Books.getBookById(req.params.id,(err, result) => {
        if (result.length === 0) {
            res.status(404).json({errors: ["Book not exist"]})
        }
        else {
            res.status(200).json(result);
        }
    });
}
/**
 * Create specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function createBook(req, res) {
    if (!req.body.email) {
        res.status(400).json({errors: ["Name is require"]});
        return;
    }
    Books.getBookById(req.body._id,(err, result) => {
        if (result.length !== 0) {
            res.status(404).json({errors: ["Book with this id already exist"]});
        }
        else {
            Books.createBook(req.body, (err, result) => {
                res.status(201).json(result);
            });
        }
    });
}

/**
 * Remove specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function removeBook(req, res) {
    Books.getBookById(req.body._id,(err, result) => {
        if (result.length === 0) {
            res.status(404).json({errors: ["Book not exist"]});
        }
        else {
            Books.removeBook(req.body, (err, result) => {
                res.status(201).json(result);
            });
        }
    });

});
}

/**
 * Update specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function editBook(req, res) {
    if (!req.body.name) {
        res.status(400).json({errors: ["Name is require"]});
        return;
    }

    Books.getBookById(req.body._id,(err, result) => {
        if (result.length !== 0) {
            res.status(404).json({errors: ["Book with this id already exist"]});
        }
        else {
            Books.getBookById(req.params.id,(err, result) => {
                if (result.length === 0) {
                    res.status(404).json({errors: ["Book not exist"]});
                } else {
                    Books.editBook(req.params.id, req.body, (err, result) => {
                        res.status(201).json(result);
                    });
                }
            });
        }
    });
}



/**
 * Update specific book entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function updateBook(req, res) {
    if (!req.body.name) {
        res.status(400).json({errors: ["Name is require"]});
        return;
    }

    Books.getBookById(req.body._id,(err, result) => {
        if (result.length !== 0) {
            res.status(404).json({errors: ["Book with this id already exist"]});
        }
        else {
            Books.getBookById(req.params.id,(err, result) => {
                if (result.length === 0) {
                    res.status(404).json({errors: ["Book not exist"]});
                } else {
                    Books.updateBook(req.params.id, req.body, (err, result) => {
                        res.status(201).json(result);
                    });
                }
            });
        }
    });
}


module.exports = {getBooks, getBookById, createBook, removeBook, editBook, updateBook};