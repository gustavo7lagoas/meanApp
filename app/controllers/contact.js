var contacts = [
    {
        _id : 1,
        name : "First contact",
        email : "first@mail.com"
    },
    {
        _id : 2,
        name : "Second contact",
        email : "second@mail.com"
    },
    {
        _id : 3,
        name : "Third contact",
        email : "third@mail.com"
    }
]

module.exports = function() {
    var controller = {};
    controller.listContacts = function(req, res) {
        res.json(contacts);
    };
    controller.getContact = function(req, res) {
        var param = req.params.contactId;
        contact = contacts.filter(function(contact) {
            return contact['_id'] == param;
        })[0];
        contact ?
            res.json(contact) :
            res.status(404).send('Contact not found');
    };
    controller.removeContact = function(req, res) {
        var contactToBeRemoved = req.params.contactId;
        contacts = contacts.filter(function(contact) {
            return contact._id != contactToBeRemoved;
        });
        res.status(204).end();
    }
    return controller;
};
