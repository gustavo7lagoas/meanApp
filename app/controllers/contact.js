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
    return controller;
};
