'use strict';

var app = require('./config/express')();
var http = require('http');
require('./config/database')('mongodb://127.0.0.1/myapp');


http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listen to port ' + app.get('port'));
});
