const MongoClient = require('mongodb').MongoClient
const logger = require('logger').createLogger(); // logs to STDOUT
const config = require('../config.js')

var users = require('./users')

var database = {
    init: () => {
        var url = config.db.host + ':' + config.db.port;
        // Connect to MongoDB by config
        MongoClient.connect(url, (err, client) => {
            // Check there is error
            if (err) {
                return logger.error("Error during connection to mongodb : ", err);
            }
            logger.info("Connected successfully to server with url:", url);

            // Init object 'users'
            users.init(client.db(config.db.name));
        });
    }
}

module.exports = database