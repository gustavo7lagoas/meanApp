module.exports = function(app) {
    var controller = app.controllers.contact;
    app.get('/contacts', controller.listContacts);
};
