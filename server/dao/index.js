var mongoose = require('mongoose');

/**
 * Data Access Layer
 *
 * @constructor
 * @param {Object} config - database config
 */
function DAO(config) {
    mongoose.connect('mongodb://localhost:27017/database',{
        MongoClient:true,
        useNewUrlParser: true
    })
        .then(() => console.log('Mongodb has started.....'))
.catch(e => console.log(e));

}

/**
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {
    data.collections.forEach(function (element) {
        mongoose.connection.createCollection(element.name)
            .then(() => {
            mongoose.connection.collections[element.name].insert(element.rows);
    })
    .then(function(){ callback() })
            .catch(function(){ callback() });
    });
};

/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {
    mongoose.connection.dropDatabase()
        .then(function(){ callback() })
        .catch(function(){ callback() });
};

var module;
module.exports = DAO;