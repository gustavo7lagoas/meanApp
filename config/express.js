'use strict';

var express = require('express');
var load = require('express-load');
var home = require('../app/routes/home');

module.exports = function() {
    var app = express();

    // Middlewares
    app.use(express.static('./public'));

    // Environment variables
    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Routes
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app)

    return app;
};
