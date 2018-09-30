'use strict';
var Authors = require("../dao/authors.js");

/**
 * Send full list of author collection
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthors(req, res) {
    Authors.getAuthors(
        function (err, result) {
            res.send({ authors: result });
        }
    )
}
/**
 * Send specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function getAuthorById(req, res) {
    Authors.getAuthorById(req.params.id,(err, result) => {
            if (result.length === 0) {
                res.status(404).json({errors: ["Author not exist"]})
            }
            else {
                res.status(200).json({ author: result[0] });
            }
        });
}
/**
 * Create specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function addAuthor(req, res) {
    if (!req.body.email) {
        res.status(400).json({errors: ["E-mail is require"]});
        return;
    }
    Authors.getAuthorById(req.body._id,(err, result) => {
        if (result.length !== 0) {
            res.status(400).json({errors: ["Author with this id already exist"]});
        }
        else {
            Authors.addAuthor(req.body, (err, result) => {
                res.status(201).json({ author: result });
            });
        }
    });
}

/**
 * Remove specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function removeAuthor(req, res) {
    Authors.getAuthorById(req.params.id,(err, result) => {
        if (result.length === 0) {
            res.status(404).json({errors: ["Author not exist"]});
        }
        else {
            Authors.removeAuthor(req.params.id, (err, result) => {
                res.status(200).json({ status: 'OK' });
            });
        }
    });
}

/**
 * Update specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
* @returns {void}
*/
function editAuthor(req, res) {
    Authors.getAuthorById(req.body._id,(err, result) => {
        if (result.length !== 0) {
            res.status(400).json({errors: ["Author with this id already exist"]});
        }
        else {
            if (!req.body.email) {
                res.status(400).json({errors: ["E-mail is require"]});
                return;
            }
            Authors.getAuthorById(req.params.id,(err, result) => {
                if (result.length === 0) {
                    res.status(404).json({errors: ["Author not exist"]});
                } else {
                    Authors.updateAuthor(req.params.id, req.body, (err, result) => {
                        res.status(200).json({ author: result });
                    });
                }
            });
        }
    });
}

/**
 * Update specific author entity by id
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @returns {void}
 */
function updateAuthor(req, res) {
    if (!req.body.email) {
        res.status(400).json({errors: ["E-mail is require"]});
        return;
    }

    Authors.getAuthorById(req.body._id,(err, result) => {
        if (result.length !== 0) {
            res.status(400).json({errors: ["Author with this id already exist"]});
        }
        else {
            Authors.getAuthorById(req.params.id,(err, result) => {
                if (result.length === 0) {
                    res.status(404).json({errors: ["Author not exist"]});
                } else {
                    Authors.updateAuthor(req.params.id, req.body, (err, result) => {
                        res.status(200).json({ author: result });
                    });
                }
            });
        }
    });
}



module.exports = {getAuthors,editAuthor, addAuthor, getAuthorById, removeAuthor, updateAuthor};