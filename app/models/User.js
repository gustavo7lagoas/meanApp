var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        login : {
            type : 'String',
            required : true,
            index : {
                unique : true
            }
        },
        name : {
            type : 'String',
            required : true
        },
        creationDate : {
            type : 'Date',
            default : Date.now
        }
    });
    return mongoose.model('User', schema);
}
