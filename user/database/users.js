var common = require('../utils')
const logger = require('logger').createLogger();
// Object for work with users
var users = {
    // The instance of db
    db: null,
    
    init: (db) => {
        this.db = db;
    },

    // Method for search users
    // Params:
    //  - info - param for search
    //  - done - callback function 
    get: (info, done) => {

        if (info && info._id) {
            info._id = common.toObjectID(info._id)
        }
        
        var collection = this.db.collection('users');
        collection.find(info).toArray((err, users) => {

            logger.info("ERROR", err)
            logger.info("USERS", users)
            if (err) {
                return done(err);
            }

            done(null, users)
        })
    },

    // Method for creating user
    // Params:
    //  - info - object with data of user
    //  - done - callback function 
    insert: (info, done) => {
        var collection = this.db.collection('users');

        var user = {};
        var errors = [];
        for(field in user_schema) {
            if (!info[field]) {
                errors.push({'field': field, 'msg': "There is not this field"})
            } else {
                user[field] = info[field];
            }
        }

        if (errors.length) {
            return done(errors);
        }

        collection.insert(user, (err, result) => {
            if (err) {
                return done(err);
            }

            done(null, user);
        })
    },

    // Method for removing user
    // Params:
    //  - id - id of user
    //  - done - callback function 
    delete: (id, done) => {
        id = common.toObjectID(id);
        if (!id) {
            return done("User with such id - not found");
        }

        var collection = this.db.collection('users');
        collection.remove({'_id': id}, (err, result) => {
            if (err) {
                return done(err);
            }
            done(null, result);
        })
    },

    // Method for creating user
    // Params:
    //  - info - object with data of updated user
    //  - done - callback function 
    update: (info, done) => {

    }

}

var user_schema = {
    username: "",
    first_name: "",
    last_name: "",
    phone: ""
}

module.exports = users