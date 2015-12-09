var mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri);

    mongoose.connection.on('connected', function() {
        console.log('Connected to database on ' + uri);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Disconnected from database on ' + uri);
    });

    mongoose.connection.on('error', function() {
        console.log('An error occurred while connecting to database ' +  uri);
    });

    // This will disconnect mongoose from database when user stops the application
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Disconnected from database by ending the application');
            // That means that proccess ended without problems
            process.exit(0);
        });
    })
}
