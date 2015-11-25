module.exports = function(app) {
    var controller = app.controllers.contact;
    app.get('/contacts', controller.listContacts);
    app.get('/contacts/:contactId', controller.getContact);
};
