'use strict';
var controller = require('../../app/controllers/home')();

module.exports = function(app) {
    console.log(controller.index);
    app.get('/', controller.index);
    app.get('/index', controller.index);
}
