module.exports = function(app) {

    var controller = {};
    var Contact = app.models.contact;

    controller.listContacts = function(req, res) {
        Contact.find().populate('emergency').exec().
            then(function(data) {
                res.json(data);
            },
            function(error) {
                console.log(error);
                res.send(500).json(error);
            });
    };

    controller.getContact = function(req, res) {
        var param = req.params.contactId;
        Contact.findById(param).exec().
            then(function(data) {
                console.log(data);
                if(data) {
                    res.json(data);
                } else {
                    res.status(404).send('Contact not found');
                }
            },
            function(error) {
                console.log(error);
                res.send(500).json(error);
            })
    };

    controller.removeContact = function(req, res) {
        var _id = req.params.contactId;
        Contact.remove({'_id' : _id}).exec().
            then(function() {
                res.status(204).end();
            },
            function(error) {
                console.log(error);
                res.send(500).json(error);
            });
    };

    controller.saveContact = function(req, res) {
        var contact;
        var _id = req.body._id;

        if(_id) {
            Contact.findByIdAndUpdate(_id, req.body).exec().
                then(function(contact) {
                    res.json(contact);
                },
                function(error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        } else {
            Contact.create(req.body).
                then(function(contact) {
                    res.send(201).json(contact);
                },
                function(error) {
                    console.log(error);
                    res.send(500).json(error);
                });
        }
    };

    return controller;
};
