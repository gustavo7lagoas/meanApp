'use strict';

var http = require('http');
var express = require('express');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database')('mongodb://127.0.0.1/myapp');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server listen to port ' + app.get('port'));
});
