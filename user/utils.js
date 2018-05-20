// Module for storage common functions
ObjectID = require('mongodb').ObjectID;

// Method for converting to ObjectID
// Params: 
//   - id - str.
// Return (or):
//  - null - if id is not valid ObjectID
//  - ObjectID
var toObjectID = (id) => {
    if (!ObjectID.isValid(id)) {
        return null;
    }
    
    return ObjectID(id)
}

module.exports = {
    'toObjectID': toObjectID
}