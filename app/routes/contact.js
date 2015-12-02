module.exports = function(app) {
    var controller = app.controllers.contact;

    app.route('/contacts').
        get(controller.listContacts);

    app.route('/contacts/:contactId').
        get(controller.getContact).
        delete(controller.removeContact);

};
