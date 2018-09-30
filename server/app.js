'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DAO = require('./dao');
const authors = require('./routes/authors');
const books = require('./routes/books');

const PORT = 3000;

const app = express();
const dao = new DAO(/*config*/);

/**
 * Middleware
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/build')));


/**
 * Routes
 */
app.use('/api/authors', authors);
app.use('/api/books', books);
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/build/index.html'));
});

/**
 * Start app
 */
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
