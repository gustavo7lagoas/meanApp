'use strict';

var app = require('./config/express')();
var http = require('http');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listen to port ' + app.get('port'));
});
