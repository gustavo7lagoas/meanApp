var MongoClient = require('mongodb').MongoClient;
    ObjectID = require('mongodb').ObjectID;

var _queryId = new ObjectID('5666dca562d2c454bcff4869');

MongoClient.connect('mongodb://127.0.0.1/myapp', function(error, db) {
    if(error) throw err;
    db.collection('contacts').findOne({'_id' : _queryId}, function(error, data) {
        if(error) throw error;
        console.log(data);
    });
});
