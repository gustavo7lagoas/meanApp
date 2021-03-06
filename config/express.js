'use strict';

var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function() {
    var app = express();

    // Environment variables
    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // Middlewares
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    // Authentication stuff
    app.use(cookieParser());
    app.use(session(
        {
            secret : 'cangoroo jack',
            resave : true,
            saveUninitialized : true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());

    // Routes
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app)

    return app;
};
